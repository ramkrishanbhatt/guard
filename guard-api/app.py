from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
from bson import ObjectId
from typing import Any, Dict

app = FastAPI()

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["arbitrary_json_db"]
collection = db["json_collection"]

# Utility function to convert MongoDB document to JSON
def json_item_helper(item) -> dict:
    item['id'] = str(item['_id'])
    del item['_id']
    return item

# Create and store any arbitrary JSON
@app.post("/json/", response_model=Dict[str, Any])
def create_json(item: Dict[str, Any]):
    result = collection.insert_one(item)
    created_item = collection.find_one({"_id": result.inserted_id})
    return json_item_helper(created_item)

# Read all stored JSON documents
@app.get("/json/", response_model=Dict[str, Any])
def get_all_json():
    items = list(collection.find())
    return {"data": [json_item_helper(item) for item in items]}

# Read one JSON document by ID
@app.get("/json/{id}", response_model=Dict[str, Any])
def get_json(id: str):
    item = collection.find_one({"_id": ObjectId(id)})
    if item:
        return json_item_helper(item)
    raise HTTPException(status_code=404, detail="Item not found")

# Update a JSON document by ID
@app.put("/json/{id}", response_model=Dict[str, Any])
def update_json(id: str, item: Dict[str, Any]):
    if '_id' in item:
        del item['_id']
    result = collection.update_one({"_id": ObjectId(id)}, {"$set": item})
    if result.modified_count == 1:
        updated_item = collection.find_one({"_id": ObjectId(id)})
        return json_item_helper(updated_item)
    raise HTTPException(status_code=404, detail="Item not found")

# Delete a JSON document by ID
@app.delete("/json/{id}", response_model=dict)
def delete_json(id: str):
    result = collection.delete_one({"_id": ObjectId(id)})
    if result.deleted_count == 1:
        return {"message": "Item deleted"}
    raise HTTPException(status_code=404, detail="Item not found")
