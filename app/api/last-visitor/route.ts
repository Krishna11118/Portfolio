import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const { db } = await connectToDatabase()

    // Get the second most recent visitor
    const visitors = await db
      .collection("visitors")
      .find({})
      .sort({ timestamp: -1 }) // Sort by timestamp in descending order
      .skip(1) // Skip the most recent visitor
      .limit(1) // Limit to 1 document
      .toArray()

    // Check if a second visitor exists
    if (!visitors || visitors.length === 0) {
      return NextResponse.json({ visitor: null })
    }

    return NextResponse.json({
      visitor: {
        country: visitors[0].country,
        city: visitors[0].city,
        timestamp: visitors[0].timestamp,
      },
    })
  } catch (error) {
    console.error("Error fetching second last visitor:", error)
    return NextResponse.json({ error: "Failed to fetch second last visitor" }, { status: 500 })
  }
}