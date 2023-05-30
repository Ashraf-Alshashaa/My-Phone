from flask import jsonify
from app import app, db

@app.route('/api', methods=['GET'])
def get_items():
    items = db.google.find()
    return jsonify(list(items)), 200