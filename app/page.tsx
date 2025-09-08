import { lazy, Suspense } from "react"
import HeroSection from "@/components/hero-section"
import BioSection from "@/components/bio-section"
import VisitorTracker from "@/components/visitor-tracker"
import Footer from "@/components/footer"

// Lazy load heavy components
const TechnologiesSection = lazy(() => import("@/components/technologies-section"))
const ProjectsSection = lazy(() => import("@/components/projects-section"))
const ContactSection = lazy(() => import("@/components/contact-section"))
const MobileVisitorLocation = lazy(() => import("@/components/mobile-visitor-location"))
const ExperienceTimeline = lazy(() => import("@/components/experience-timeline"))
const WorldMapDemo = lazy(() => import("@/components/world-map-optimized"))

export default function Home() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <VisitorTracker />
      <Suspense fallback={<div className="h-4" />}>
        <MobileVisitorLocation />
      </Suspense>
      <HeroSection />
      <BioSection />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading timeline...</div>}>
        <ExperienceTimeline />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading technologies...</div>}>
        <TechnologiesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading projects...</div>}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading map...</div>}>
        <WorldMapDemo />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center text-white">Loading contact...</div>}>
        <ContactSection />
      </Suspense>
      <Footer />
    </div>
  )
}
