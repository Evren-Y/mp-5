import { getClient } from "./mongodb";

export async function getUrlByAlias(alias: string): Promise<string | null> {
  const client = await getClient();
  const db = client.db("urlShortener"); // Change if your DB is named differently
  const collection = db.collection("links");

  const entry = await collection.findOne({ alias });

  return entry?.url ?? null;
}
