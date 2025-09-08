//lib/mongodb.ts
import { Db, MongoClient } from "mongodb"
import { env } from "@/lib/env"

const NEXT_PUBLIC_MONGODB_URI = env.NEXT_PUBLIC_MONGODB_URI
const NEXT_PUBLIC_MONGODB_DB = env.NEXT_PUBLIC_MONGODB_DB

// Check the MongoDB URI
if (!NEXT_PUBLIC_MONGODB_URI) {
  throw new Error("Please define the NEXT_PUBLIC_MONGODB_URI environment variable")
}

// Check the MongoDB DB
if (!NEXT_PUBLIC_MONGODB_DB) {
  throw new Error("Please define the NEXT_PUBLIC_MONGODB_DB environment variable")
}

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase() {
  // If the database connection is cached, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  // Set the connection options with optimizations
  const opts = {
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close connections after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  }

  try {
    // Connect to cluster
    const client = new MongoClient(NEXT_PUBLIC_MONGODB_URI!, opts)
    await client.connect()
    const db = client.db(NEXT_PUBLIC_MONGODB_DB)

    // Set cache
    cachedClient = client
    cachedDb = db

    return { client, db }
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw error
  }
}
