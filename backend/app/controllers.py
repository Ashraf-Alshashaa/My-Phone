from app import db
from flask import request, jsonify

def get_collections_names():
    collection_names = db.list_collection_names()
    return collection_names

def get_brand_items(brand_name):
    brand_items = db[brand_name].find()
    return list(brand_items)

def get_mobile(brand_name, id):
    mobile = db[brand_name].find({"_id": id})
    return list(mobile)