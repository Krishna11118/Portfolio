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

  // Set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  // Connect to cluster
  const client = new MongoClient(NEXT_PUBLIC_MONGODB_URI!)
  await client.connect()
  const db = client.db(NEXT_PUBLIC_MONGODB_DB)

  // Set cache
  cachedClient = client
  cachedDb = db

  return { client, db }
}
