from flask import Flask
from decouple import config
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = config('MONGO_URI')
app.config['MONGO_DBNAME'] = config('MONGO_DBNAME')
CORS(app)

client = MongoClient(app.config['MONGO_URI'])
db = client[app.config['MONGO_DBNAME']]

from app import routes