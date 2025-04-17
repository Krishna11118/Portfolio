import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { env } from "@/lib/env";
import { applyCorsHeaders } from "@/utils/cors";

export async function POST(req: NextRequest) {
  const headers = applyCorsHeaders(req, {});

  try {
    // Get visitor IP
    // const ipResponse = await fetch("https://api.ipify.org?format=json");
    // const { ip } = await ipResponse.json();

    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    console.log("Visitor IP:", ip);

    // Get location data from ip2location.io
    const apiKey = env.NEXT_PUBLIC_IP2LOCATION_API_KEY;
    if (!apiKey) {
      throw new Error("IP2LOCATION_API_KEY is not defined");
    }

    const locationResponse = await fetch(`https://api.ip2location.io/?key=${apiKey}&ip=${ip}`);
    const locationData = await locationResponse.json();

    // Connect to MongoDB and save visitor data
    const { db } = await connectToDatabase();

    await db.collection("visitors").insertOne({
      ip,
      country: locationData.country_name,
      region: locationData.region_name,
      city: locationData.city_name,
      latitude: locationData.latitude,
      longitude: locationData.longitude,
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json({ error: "Failed to track visitor" }, { status: 500, headers });
  }
}

export async function GET(req: NextRequest) {
  const headers = applyCorsHeaders(req, {});

  try {
    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Count total visitors
    const visitorCount = await db.collection("visitors").countDocuments();

    return NextResponse.json({ count: visitorCount }, { headers });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json({ error: "Failed to fetch visitor count" }, { status: 500, headers });
  }
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { status: 200, headers: applyCorsHeaders(req, {}) });
}
