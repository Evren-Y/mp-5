import getCollection, { URL_COLLECTION } from "./mongodb";

export async function getUrlByAlias(alias: string): Promise<string | null> {
  const collection = await getCollection(URL_COLLECTION);
  const result = await collection.findOne({ alias });
  return result?.url ?? null;
}
