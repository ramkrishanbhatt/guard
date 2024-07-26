from app.database import db
from app.models import Item

async def create_item(item: Item):
    result = await db["items"].insert_one(item.dict())
    return result
