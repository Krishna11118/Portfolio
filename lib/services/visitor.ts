
export async function fetchVisitorCount(): Promise<number> {
    const response = await fetch("/api/track-visitor", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    
    if (!response.ok) {
        throw new Error(`Failed to fetch visitor count: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log("Response from /api/track-visitor:", data);
    if (typeof data.count !== "number") {
      throw new Error("Invalid response format: count is not a number");
    }
  
    return data.count;
  }