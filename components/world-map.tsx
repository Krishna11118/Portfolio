import WorldMap from "@/components/ui/world-map";
import AnimatedTitle from "@/components/ui/animated-title";
import { getLocations } from "@/lib/services/locations";

export default async function WorldMapDemo() {
  let locations: Array<{ latitude: number; longitude: number; city: string }> = [];
  let error: string | null = null;

  try {
    locations = await getLocations();
  } catch (err: any) {
    console.error("WorldMapDemo error:", err.message);
    error = "Failed to load locations. Please try again later.";
  }

  // Supplement with mock cities to reach 11
  if (locations.length < 11 && !error) {
    const mockCities = [
      { latitude: 19.0760, longitude: 72.8777, city: "Mumbai" },
      { latitude: 12.9716, longitude: 77.5946, city: "Bangalore" },
      // { latitude: 13.0827, longitude: 80.2707, city: "Chennai" },
      { latitude: 28.4595, longitude: 77.0266, city: "Gurugram" },
      { latitude: 22.5726, longitude: 88.3639, city: "Kolkata" },
      { latitude: 8.0844, longitude: 77.5495, city: "Kanyakumari" },
      // { latitude: 17.3850, longitude: 78.4867, city: "Hyderabad" },
      // { latitude: 23.0225, longitude: 72.5714, city: "Ahmedabad" },
      // { latitude: 18.5204, longitude: 73.8567, city: "Pune" },
      // { latitude: 26.9124, longitude: 75.7873, city: "Jaipur" },
      // add us and uk cities
      { latitude: 40.7128, longitude: -74.0060, city: "New York" },
      { latitude: 34.0522, longitude: -118.2437, city: "Los Angeles" },
      { latitude: 51.5074, longitude: -0.1278, city: "London" },
      { latitude: 48.8566, longitude: 2.3522, city: "Paris" },
      { latitude: 35.6895, longitude: 139.6917, city: "Tokyo" },
      { latitude: 55.7558, longitude: 37.6173, city: "Moscow" },
    ];
    const uniqueCities = Array.from(
      new Map([...locations, ...mockCities].map((city) => [city.city, city])).values()
    ).slice(0, 11);
    locations = uniqueCities;
  }

  return (
    <div className="py-4 bg-black w-full" id="map">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedTitle />
        {/* <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and Travellers.
        </p> */}
      </div>
      {error ? (
        <p className="text-white text-center">{error}</p>
      ) : locations.length > 0 ? (
        <WorldMap locations={locations} />
      ) : (
        <p className="text-white text-center">No locations available.</p>
      )}
    </div>
  );
}