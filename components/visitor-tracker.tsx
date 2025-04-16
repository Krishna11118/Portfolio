"use client"
import { useEffect } from "react"

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch("/api/track-visitor", {
          method: "POST",
        })
      } catch (error) {
        console.error("Error tracking visitor:", error)
      }
    }

    trackVisitor()
  }, [])

  return null
}
