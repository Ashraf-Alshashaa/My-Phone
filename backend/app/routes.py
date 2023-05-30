from flask import request, jsonify
from app import app
from app import controllers

@app.route('/api/collections_names', methods=['GET'])
def collection_names():
    try:
      return {"success": True, "result": controllers.get_collections_names()}, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to get collections, try again later"}, 500

@app.route('/api/brand/', methods=['GET'])
def brand_items():
    try:
      brand_name = request.args.get("brand")
      return {"success": True, "result":controllers.get_brand_items(brand_name)}, 200
    except Exception as e:
      return {"success": False, "msg": "Unable to get brand items, try again later"}, 500