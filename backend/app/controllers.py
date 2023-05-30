from app import db

def get_collections_names():
    collection_names = db.list_collection_names()
    return collection_names