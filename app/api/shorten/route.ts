import { NextResponse } from "next/server";
import getCollection, { URL_COLLECTION } from "@/lib/mongodb";
import { isValidUrl } from "@/lib/validateUrl";

export async function POST(req: Request) {
  const { alias, url } = await req.json();

  if (!alias || !url) {
    return NextResponse.json({ error: "Both alias and URL are required." }, { status: 400 });
  }

  const isValid = await isValidUrl(url);
  if (!isValid) {
    return NextResponse.json({ error: "The provided URL could not be verified." }, { status: 400 });
  }

  const collection = await getCollection(URL_COLLECTION);

  const existing = await collection.findOne({ alias });
  if (existing) {
    return NextResponse.json({ error: "Alias is already taken." }, { status: 409 });
  }

  await collection.insertOne({ alias, url });
  return NextResponse.json({ message: "Shortened URL created successfully" });
}
