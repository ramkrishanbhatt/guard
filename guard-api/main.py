from fastapi import FastAPI
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.responses import FileResponse
from bson import ObjectId
import os
from dotenv import load_dotenv
from pydantic import BaseModel, Field, BaseConfig
from typing import Optional
import os
from fastapi import UploadFile
from uuid import uuid4
from dotenv import load_dotenv
import motor.motor_asyncio
from dotenv import load_dotenv
from process_video import process_video
from fastapi.responses import JSONResponse

# Load environment variables from .env filessss
load_dotenv()

VIDEO_STORAGE_PATH = os.getenv("VIDEO_STORAGE_PATH")
MONGO_URL = os.getenv("MONGO_URL")

app = FastAPI()


# -----------------storage------------------------#
async def save_video(file: UploadFile) -> str:
    extension = file.filename.split(".")[-1]
    file_id = f"{uuid4()}.{extension}"
    file_dir = os.path.dirname(os.path.realpath(__file__))
    file_path = file_dir + VIDEO_STORAGE_PATH + file_id
    with open(file_path, "wb") as f:
        f.write(await file.read())

    return file_id


def get_video_url(file_id: str) -> str:
    file_dir = os.path.dirname(os.path.realpath(__file__))
    file_path = file_dir + VIDEO_STORAGE_PATH + file_id
    return file_path


# ------------------db----------------------------#
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL, serverSelectionTimeoutMS=5000)
db = client.admin


# --------------pydantic mmodels------------------#
class Item(BaseModel):
    id: Optional[str] = Field(alias="_id")
    name: str
    description: str
    price: float

    class Config(BaseConfig):
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class ItemCreateSchema(BaseModel):
    name: str
    description: str
    price: float


class ItemResponseSchema(BaseModel):
    id: Optional[str] = Field(alias="_id")
    name: str
    description: str
    price: float

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {
            "ObjectId": lambda v: str(v) if v else None
        }


# --------------CURD APIs------------------#
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
    return {"video_path": video_url}


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
    file_dir = os.path.dirname(os.path.realpath(__file__))
    file_path = file_dir + VIDEO_STORAGE_PATH + file_id
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Video not found")

    return FileResponse(file_path)


@app.post("/process-video/")
async def process_video_endpoint(file: UploadFile = File(...)):
    try:
        processed_data = await process_video(file)
        # collection.insert_one(processed_data)
        return JSONResponse(content=processed_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
