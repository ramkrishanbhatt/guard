from pydantic import BaseModel, Field
from typing import Optional

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
