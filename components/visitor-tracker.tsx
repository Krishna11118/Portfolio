"use client"
import { useEffect } from "react"

export default function VisitorTracker() {
  useEffect(() => {
    // Use setTimeout to defer API call after initial render
    const timeoutId = setTimeout(() => {
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
    }, 100) // Small delay to not block initial render

    return () => clearTimeout(timeoutId)
  }, [])

  // Add a privacy notice that appears briefly on first visit
  useEffect(() => {
    // Check if user has seen privacy notice
    const hasSeenNotice = localStorage.getItem('privacy-notice-seen')
    
    if (!hasSeenNotice) {
      // Set flag that notice has been seen
      localStorage.setItem('privacy-notice-seen', 'true')
      
      // Show brief privacy notice
      const notice = document.createElement('div')
      notice.innerHTML = `
        <div style="
          position: fixed; 
          bottom: 20px; 
          right: 20px; 
          background: rgba(0,0,0,0.9); 
          color: white; 
          padding: 16px; 
          border-radius: 8px; 
          border: 1px solid #374151;
          font-size: 14px; 
          max-width: 300px; 
          z-index: 1000;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        ">
          <p style="margin: 0 0 8px 0; font-weight: 500;">Privacy Notice</p>
          <p style="margin: 0 0 12px 0; font-size: 13px; color: #d1d5db;">
            We collect anonymous location data for our world map. 
          </p>
          <a href="/privacy" style="color: #60a5fa; text-decoration: none; font-size: 13px;">Learn more</a>
          <button onclick="this.parentElement.parentElement.remove()" style="
            position: absolute; 
            top: 8px; 
            right: 8px; 
            background: none; 
            border: none; 
            color: #9ca3af; 
            cursor: pointer; 
            font-size: 18px;
          ">×</button>
        </div>
      `
      document.body.appendChild(notice)
      
      // Auto-remove after 8 seconds
      setTimeout(() => {
        if (notice.parentElement) {
          notice.remove()
        }
      }, 8000)
    }
  }, [])

  return null
}