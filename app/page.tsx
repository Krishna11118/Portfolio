import HeroSection from "@/components/hero-section"
import BioSection from "@/components/bio-section"
import TechnologiesSection from "@/components/technologies-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import VisitorTracker from "@/components/visitor-tracker"
import MobileVisitorLocation from "@/components/mobile-visitor-location"
import ExperienceTimeline from "@/components/experience-timeline"
import WorldMapDemo from "@/components/world-map"

export default function Home() {
  return (
    <div className="min-h-screen  bg-black pt-16 pb-10">
      <VisitorTracker />
      <MobileVisitorLocation />
      <HeroSection />
      <BioSection />
      <ExperienceTimeline />
      <TechnologiesSection />
      <ProjectsSection />
      <WorldMapDemo />
      <ContactSection />

    </div>
  )
}
