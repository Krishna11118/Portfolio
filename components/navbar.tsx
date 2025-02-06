"use client"

import { HomeIcon, BriefcaseIcon, PhoneIcon, FolderIcon, WrenchIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Home', href: '#home', icon: HomeIcon },
  { name: 'Tech Stack', href: '#tech-stack', icon: WrenchIcon },
  { name: 'Projects', href: '#projects', icon: FolderIcon },
  { name: 'Experience', href: '#experience', icon: BriefcaseIcon },
  { name: 'Contact', href: '#contact', icon: PhoneIcon },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
          <a href="#home" className="text-xl font-bold">Portfolio</a>
          <div className="flex gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden md:block">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}