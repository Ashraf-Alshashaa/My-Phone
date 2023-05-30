from app import db
from bson.json_util import dumps

def get_collections_names():
    collection_names = db.list_collection_names()
    return collection_names

def get_brand_items(brand_name):
    brand_items = db[brand_name].find()
    return list(brand_items)