export async function getLocations(): Promise<
  Array<{ latitude: number; longitude: number; city: string }>
> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  console.log("Base URL:", baseUrl);
  const response = await fetch(`${baseUrl}/api/locations`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  // console.log("Response from /api/locations:", response);

  if (!response.ok) {
    throw new Error(`Failed to fetch locations: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("Response from /api/locations:", data);

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

  return data;
}