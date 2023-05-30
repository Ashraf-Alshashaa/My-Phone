from flask import request, jsonify
from app import app
from app import controllers

@app.route('/api/collections_names', methods=['GET'])
def collection_names():
    return {"success": True, "result": controllers.get_collections_names()}, 200

@app.route('/api/brand/', methods=['GET'])
def brand_items():
    brand_name = request.args.get("brand")
    return {"success": True, "result":controllers.get_brand_items(brand_name)}, 200