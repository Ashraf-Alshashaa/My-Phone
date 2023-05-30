from flask import jsonify
from app import app
from app import controllers

@app.route('/api/collections_names', methods=['GET'])
def collection_names():
    return {"success": True, "result": controllers.get_collections_names()}