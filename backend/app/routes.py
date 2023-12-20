from flask import request, jsonify
from app import app, controllers

@app.route('/api/collections-names', methods=['GET'])
def collection_names():
    return controllers.get_collections_names()
    
@app.route('/api/brand/', methods=['GET'])
def brand_items():
    brand_name = request.args.get("brand")
    return controllers.get_brand_items(brand_name)
    
@app.route('/api/mobile/', methods=['GET'])
def mobile():
    brand_name = request.args.get("brand")
    id = request.args.get("id")
    return controllers.get_mobile(brand_name, id)

@app.route('/api/search/', methods=['POST'])
def search():
    search_str = request.json.get("search_str")
    return controllers.search_mobiles(search_str)