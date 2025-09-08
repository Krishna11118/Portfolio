// Cache for locations to avoid repeated API calls
let cachedLocations: Array<{ latitude: number; longitude: number; city: string }> | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getLocations(): Promise<
  Array<{ latitude: number; longitude: number; city: string }>
> {
  // Check if we have valid cached data
  if (cachedLocations && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return cachedLocations;
  }

  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  console.log("Base URL:", baseUrl);
  
  try {
    const response = await fetch(`${baseUrl}/api/locations`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }

    const data = await response.json();

    if (
      !Array.isArray(data) ||
      !data.every(
        (item) =>
          typeof item.latitude === "number" &&
          typeof item.longitude === "number" &&
          typeof item.city === "string"
      )
    ) {
      throw new Error(
        "Invalid response format: expected array of { latitude: number, longitude: number, city: string }"
      );
    }

    // Cache the successful response
    cachedLocations = data;
    cacheTimestamp = Date.now();

    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    
    // Return cached data if available, even if expired
    if (cachedLocations) {
      console.log("Returning cached locations due to error");
      return cachedLocations;
    }
    
    // Fallback to empty array if no cache available
    return [];
  }
}