from pydantic import BaseModel, Field, BaseConfig
from bson import ObjectId
from typing import Optional

class Item(BaseModel):
    id: Optional[str] = Field(alias="_id")
    name: str
    description: str
    price: float

    class Config(BaseConfig):
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
