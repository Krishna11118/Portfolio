"use client";

import { lazy, Suspense, useState, useEffect } from "react";
import AnimatedTitle from "@/components/ui/animated-title";

// Lazy load the WorldMap component
const WorldMap = lazy(() => import("@/components/ui/world-map"));

export default function WorldMapDemo() {
  return (
    <div className="py-4 bg-black w-full" id="map">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedTitle />
      </div>
      <Suspense 
        fallback={
          <div className="w-full aspect-[2/1] bg-black rounded-lg flex items-center justify-center">
            <div className="text-white">Loading map...</div>
          </div>
        }
      >
        <WorldMapLazy />
      </Suspense>
    </div>
  );
}

// Separate component for the map data fetching
function WorldMapLazy() {
  return <WorldMapWithData />;
}

// Component that handles data fetching on client side
function WorldMapWithData() {
  const [locations, setLocations] = useState<Array<{ latitude: number; longitude: number; city: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("/api/locations", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch locations: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Supplement with mock cities if needed
        if (data.length < 11) {
          const mockCities = [
            { latitude: 19.0760, longitude: 72.8777, city: "Mumbai" },
            { latitude: 12.9716, longitude: 77.5946, city: "Bangalore" },
            { latitude: 28.4595, longitude: 77.0266, city: "Gurugram" },
            { latitude: 22.5726, longitude: 88.3639, city: "Kolkata" },
            { latitude: 8.0844, longitude: 77.5495, city: "Kanyakumari" },
            { latitude: 40.7128, longitude: -74.0060, city: "New York" },
            { latitude: 34.0522, longitude: -118.2437, city: "Los Angeles" },
            { latitude: 51.5074, longitude: -0.1278, city: "London" },
            { latitude: 48.8566, longitude: 2.3522, city: "Paris" },
            { latitude: 35.6895, longitude: 139.6917, city: "Tokyo" },
            { latitude: 55.7558, longitude: 37.6173, city: "Moscow" },
          ];
          const uniqueCities = Array.from(
            new Map([...data, ...mockCities].map((city) => [city.city, city])).values()
          ).slice(0, 11);
          setLocations(uniqueCities);
        } else {
          setLocations(data);
        }
      } catch (err: any) {
        console.error("WorldMapDemo error:", err);
        setError("Failed to load locations");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    return (
      <div className="w-full aspect-[2/1] bg-black rounded-lg flex items-center justify-center">
        <div className="text-white">Loading map...</div>
      </div>
    );
  }

  if (error) {
    return <p className="text-white text-center">{error}</p>;
  }

  return locations.length > 0 ? (
    <WorldMap locations={locations} />
  ) : (
    <p className="text-white text-center">No locations available.</p>
  );
}
