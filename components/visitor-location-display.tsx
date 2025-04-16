"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

type VisitorLocation = {
  country: string
  city: string
  timestamp: string
}

interface VisitorLocationDisplayProps {
  isMobile?: boolean
}

export default function VisitorLocationDisplay({ isMobile = false }: VisitorLocationDisplayProps) {
  const [location, setLocation] = useState<VisitorLocation | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLastVisitor = async () => {
      try {
        const response = await fetch("/api/last-visitor")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.visitor) {
          setLocation(data.visitor)
        } else {
          setError("No visitor data available")
        }
      } catch (error) {
        console.error("Error fetching visitor location:", error)
        setError("Failed to load visitor location")
      } finally {
        setLoading(false)
      }
    }

    fetchLastVisitor()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-3 space-x-2 w-[12rem] animate-pulse">
        <div className="h-3 w-3 bg-gray-300 rounded-full" />
        <div className="h-3 w-20 bg-gray-300 rounded" />
        <div className="h-3 w-3 bg-gray-300 rounded-full" />
        <div className="h-3 w-3 bg-gray-300 rounded-full" />
      </div>
    )
  }

  if (error || !location) {
    return null
  }

  return (
    <div className="flex items-center text-xs gap-1">
      <MapPin color="gray" className="h-3 w-3 flex-shrink-0" />
      <span className="whitespace-nowrap truncate sm:max-w-none">
        <span className={!isMobile ? 'text-gray-500' : ''}>Last Visitor:</span>{' '}
        {`${location.city}, ${location.country}`}
      </span>
    </div>
  )

}