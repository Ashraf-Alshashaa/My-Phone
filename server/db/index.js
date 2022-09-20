import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";
import { dataObject } from "./data.js";
dotenv.config();

const dbName = "phones";
const collectionName = "data";

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const createDB = async (client) => {
  await client.db(dbName).collection(collectionName).deleteMany({});
  console.log(`database ${dbName} is created`);
};

const insertData = async (client, DataObject) => {
  await client.db(dbName).collection(collectionName).insertMany(DataObject);
};

const main = async () => {
  try {
    await createDB(client);
    await insertData(client, dataObject);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

main();
