import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.MONGODB_URI as string;
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

const DB_NAME = "cs391-url-shortener";
export const URL_COLLECTION = "urls-collection";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
  if(!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db(DB_NAME);
}

export default async function getCollection(
  collectionName: string,
): Promise<Collection> {
  if (!db) {
    db = await connect();
  }
  return db.collection(collectionName);
}