"use client"
import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

type VisitorLocation = {
  country: string
  city: string
  timestamp: string
}

export default function MobileVisitorLocation() {
  const [location, setLocation] = useState<VisitorLocation | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLastVisitor = async () => {
      try {
        const response = await fetch("/api/last-visitor")
        if (response.ok) {
          const data = await response.json()
          setLocation(data.visitor)
        }
      } catch (error) {
        console.error("Error fetching visitor location:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLastVisitor()
  }, [])

  if (loading || !location) {
    return null
  }

  return (
    <div className="hidden md:hidden bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 fixed bottom-0 left-0 right-0 py-2 px-4 flex items-center justify-center text-xs text-gray-400 gap-1 z-50">
      <MapPin className="h-3 w-3" />
      <span>
        Last visitor: {location.city}, {location.country}
      </span>
    </div>
  )
}
