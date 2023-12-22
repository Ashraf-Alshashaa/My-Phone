from app import db
from flask import jsonify

def get_collections_names():
    collection_names = db.list_collection_names()
    try:
      return {"success": True, "result": collection_names }, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to retrieve brands list. Please try again later."}, 500

def get_brand_items(brand_name):
    brand_items = db[brand_name].find()
    try:
      return {"success": True, "result":list(brand_items)}, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to retrieve brand items. Please try again later."}, 500

def get_mobile(brand_name, id):
    mobile = db[brand_name].find({"_id": id})
    try:
      return {"success": True, "result": list(mobile)[0]}, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to retrieve the mobile. Please try again later."}, 500
    
def search_mobiles(search_str):
  results = []
  try:
    collections = db.list_collection_names()

    for collection_name in collections:
        collection = db[collection_name]
        query = {"name": {"$regex": f".*{search_str}.*", "$options": "i"}}
        collection_results = list(collection.find(query))

        if collection_results:
            results = results + collection_results

    return jsonify({"success": True, "result": results}), 200
  except Exception as e:
    return jsonify({"success": False, "msg": "Unable to retrieve the mobiles. Please try again later."}), 500
    