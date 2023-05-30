from app import db

def get_collections_names():
    collection_names = db.list_collection_names()
    try:
      return {"success": True, "result": collection_names }, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to get collections, try again later"}, 500

def get_brand_items(brand_name):
    brand_items = db[brand_name].find()
    try:
      return {"success": True, "result":list(brand_items)}, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to get brand items, try again later"}, 500

def get_mobile(brand_name, id):
    mobile = db[brand_name].find({"_id": id})
    try:
      return {"success": True, "result": list(mobile)[0]}, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to get mobile, try again later"}, 500