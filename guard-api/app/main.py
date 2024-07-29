import os
import json
from fastapi import FastAPI, HTTPException, UploadFile, File, Query
from fastapi.responses import FileResponse
from app.models import Item
from app.schemas import ItemCreateSchema, ItemResponseSchema
from app.database import db, collection
from app.storage.video_storage import save_video, get_video_url
from dotenv import load_dotenv
from fastapi.responses import JSONResponse
from .process_video import process_video
from bson import ObjectId
from pydantic import BaseModel
from typing import List

# Load environment variables from .env file
load_dotenv()

VIDEO_STORAGE_PATH = os.getenv("VIDEO_STORAGE_PATH", "/app/app/storage/videos/")

app = FastAPI()

#Routers
@app.post("/items/", response_model=ItemResponseSchema)
async def create_item(item: ItemCreateSchema):
    item_dict = item.dict()
    new_item = await db["items"].insert_one(item_dict)
    created_item = await db["items"].find_one({"_id": new_item.inserted_id})
    created_item["_id"] = str(created_item["_id"])  # Convert ObjectId to string
    return ItemResponseSchema(**created_item)


@app.get("/items/{item_id}", response_model=ItemResponseSchema)
async def read_item(item_id: str):
    item = await db["items"].find_one({"_id": ObjectId(item_id)})
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    item["_id"] = str(item["_id"])  # Convert ObjectId to string
    return ItemResponseSchema(**item)


@app.post("/upload_video/")
async def upload_video(file: UploadFile = File(...)):
    file_id = await save_video(file)
    video_url = get_video_url(file_id)
    return {"video_url": video_url}



class MongoEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super().default(obj)

def serialize_mongo_data(data):
    """Convert MongoDB ObjectId to string in the data."""
    if isinstance(data, dict):
        # Create a new dictionary to hold the converted data
        new_data = {}
        for key, value in data.items():
            if isinstance(value, ObjectId):
                new_data[key] = str(value)
            elif isinstance(value, dict):
                new_data[key] = serialize_mongo_data(value)
            elif isinstance(value, list):
                new_data[key] = [serialize_mongo_data(item) for item in value]
            else:
                new_data[key] = value
        return new_data
    elif isinstance(data, list):
        return [serialize_mongo_data(item) for item in data]
    return data

async def insert_document(data):
    return await collection.insert_one(data)

@app.post("/process-video/")
async def process_video_endpoint(file: UploadFile = File(...)):
    
    try:
        file_id = await save_video(file)
        file.filename = file_id
        file.file_path = os.path.join(VIDEO_STORAGE_PATH, file_id)
        processed_data = await process_video(file)
        
        # Assuming you have a MongoDB collection named 'collection'
        insert_result = await collection.insert_one(processed_data)
        
        return JSONResponse(content={"id": str(insert_result.inserted_id)})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/classify-videos/")
async def classify_videos(tag: str = Query(...)):
    try:
        # Define the filter query
        filter_query = {
            "hiveResponse.status.response.output.classes": {
                "$elemMatch": {
                    "class": tag,
                    "score":  {"$gt": 2.9038022830718546e-7}
                }
            }
        }

        # Fetch all video documents matching the filter
        videos_cursor = collection.find(filter_query)
        videos = await videos_cursor.to_list(length=None)  # Convert cursor to a list
        
        # Initialize a dictionary to store frames by video_id
        video_frames = {}
        
        # Extract frames with the specified tag from each video
        for video in videos:
            video_id = str(video["_id"])
            if video_id not in video_frames:
                video_frames[video_id] = []

            for status in video.get("hiveResponse", {}).get("status", []):
                for frame in status.get("response", {}).get("output", []):
                    # We are assuming `bounding_poly` is not present, so we will remove related code
                    for class_score in frame.get("classes", []):
                        if class_score["class"] == tag and class_score["score"] > 2.9038022830718546e-7:
                            video_frames[video_id].append({
                                "time": frame["time"],
                                "score": class_score["score"]
                            })
                            print(f"Added frame: {frame['time']} with score: {class_score['score']}")

        # Convert the dictionary to a list of dictionaries
        video_frames_list = [{"video_id": vid, "frames": frames} for vid, frames in video_frames.items()]
        
        return JSONResponse(content=video_frames_list)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    
class UpdateDecisionModel(BaseModel):
    video_id: str
    status: str
    classes: List[str]

@app.post("/update-decision/")
async def update_decision(update_decision: UpdateDecisionModel):
    try:
        # Update the decision for the specified video ID
        update_result = await collection.update_one(
            {"_id": ObjectId(update_decision.video_id)},
            {"$set": {"decision.status": update_decision.status, "decision.classes": update_decision.classes}}
        )
        
        if update_result.modified_count > 0:
            # Fetch the updated document
            updated_document = await collection.find_one({"_id": ObjectId(update_decision.video_id)})
            if updated_document:
                # Convert ObjectId to string
                updated_document["_id"] = str(updated_document["_id"])
                return JSONResponse(content=updated_document)
            else:
                raise HTTPException(status_code=404, detail="Document not found after update")
        else:
            return {"message": f"No matching video ID found: {update_decision.video_id}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
def serialize_document(doc):
    """
    Convert MongoDB document to a JSON serializable format.
    """
    doc['_id'] = str(doc['_id'])  # Convert ObjectId to string
    return doc

@app.get("/processed-data/")
async def get_processed_data():
    try:
        # Retrieve the data from MongoDB
        processed_data_cursor = collection.find()
        processed_data_list = await processed_data_cursor.to_list(length=None)
        
        # Convert each document to a JSON serializable format
        processed_data_list = [serialize_document(doc) for doc in processed_data_list]
        
        return JSONResponse(content=processed_data_list)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/get-processed-data/{id}")
async def get_processed_data(id: str):
    try:
        # Fetch the document with the given ID
        document = await collection.find_one({"_id": ObjectId(id)})
        
        if document is None:
            raise HTTPException(status_code=404, detail="Document not found")
        
        # Convert ObjectId to string
        document["_id"] = str(document["_id"])
        
        return JSONResponse(content=document)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/items/{item_id}/video", response_model=ItemResponseSchema)
async def update_item_with_video(item_id: str, file: UploadFile = File(...)):
    file_id = await save_video(file)
    video_url = get_video_url(file_id)

    update_result = await db["items"].update_one({"_id": ObjectId(item_id)}, {"$set": {"video_url": video_url}})

    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Item not found or no update needed")

    updated_item = await db["items"].find_one({"_id": ObjectId(item_id)})
    updated_item["_id"] = str(updated_item["_id"])  # Convert ObjectId to string
    return ItemResponseSchema(**updated_item)

@app.get("/videos/{file_id}")
async def get_video(file_id: str):
    file_path = os.path.join(VIDEO_STORAGE_PATH, file_id)

    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Video not found")

    return FileResponse(file_path)
