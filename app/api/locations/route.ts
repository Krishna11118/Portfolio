// app/api/locations/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { applyCorsHeaders } from '@/utils/cors';

export async function GET(req: NextRequest) {
    try {
        // Connect to MongoDB
        const { db } = await connectToDatabase();

        // Aggregate to get one location per unique city, sorted by timestamp (most recent)
        const locations = await db
            .collection("visitors")
            .aggregate([
                {
                    $sort: { timestamp: -1 }, // Sort by timestamp descending (newest first)
                },
                {
                    $group: {
                        _id: "$city",
                        latitude: { $first: "$latitude" },
                        longitude: { $first: "$longitude" },
                        city: { $first: "$city" },
                    },
                },
                {
                    $project: {
                        _id: 0,
                        latitude: 1,
                        longitude: 1,
                        city: 1,
                    },
                },
                {
                    $limit: 100, // Limit to 100 unique cities
                },
            ])
            .toArray();

        const response = NextResponse.json(locations);
        
        // Apply CORS headers
        applyCorsHeaders(req, response);
        
        // Add caching headers
        response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
        
        return response;
    } catch (error) {
        console.error("Error fetching locations:", error);
        const response = NextResponse.json({ message: "Internal server error" }, { status: 500 });
        applyCorsHeaders(req, response);
        return response;
    }
}
