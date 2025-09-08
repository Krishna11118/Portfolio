import Link from "next/link"
import { Shield, Heart, Code } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col space-y-4 md:space-y-0">
          {/* Main Footer Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Left side - Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>© {currentYear} Krishna Dev.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline">Made with</span>
                <span className="sm:hidden">Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>and lots of coffee.</span>
              </div>
            </div>

            {/* Right side - Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-sm">
              <Link 
                href="/privacy" 
                className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </Link>
              
              <div className="hidden sm:block text-gray-600">|</div>
              
              <a 
                href="https://github.com/Krishna11118" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
