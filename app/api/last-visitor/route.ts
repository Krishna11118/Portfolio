import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const { db } = await connectToDatabase()

    // Get the most recent visitor
    const visitor = await db.collection("visitors").findOne({}, { sort: { timestamp: -1 } })

    if (!visitor) {
      return NextResponse.json({ visitor: null })
    }

    return NextResponse.json({
      visitor: {
        country: visitor.country,
        city: visitor.city,
        timestamp: visitor.timestamp,
      },
    })
  } catch (error) {
    console.error("Error fetching last visitor:", error)
    return NextResponse.json({ error: "Failed to fetch last visitor" }, { status: 500 })
  }
}
