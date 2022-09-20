import { MongoClient } from "mongodb";
import path from "path";
const __dirname = path.resolve();
const __dirnameNew = __dirname.slice(0, -7);

const dbName = "phones";
const collectionName = "data";

const MONGODB_URL =
  "mongodb+srv://ashraf:ChoosePassword@cluster0.kuyng2c.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(MONGODB_URL);

export const gitData = async (req, res) => {
  const data = await client.db(dbName).collection(collectionName).findOne();
  res.json(data);
};

export const sendHtml = (req, res) => {
  res.sendFile(path.join(__dirnameNew, "/index.html"));
};
