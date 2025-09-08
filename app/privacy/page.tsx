import { ArrowLeft, Shield, Eye, MapPin, BarChart3, Database, Lock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Portfolio",
  description: "Privacy policy for visitor data collection and usage",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="flex items-center mb-3 sm:mb-4">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2 sm:mr-3" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Your privacy is important to us. This policy explains how we collect and use your data.
          </p>
          
          <div className="text-xs sm:text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Data Collection Section */}
          <section className="bg-gray-900/50 rounded-lg p-4 sm:p-6 border border-gray-800">
            <div className="flex items-center mb-3 sm:mb-4">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3" />
              <h2 className="text-xl sm:text-2xl font-semibold">What Data We Collect</h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white mb-1 text-sm sm:text-base">Location Information</h3>
                  <p className="leading-relaxed">We collect your IP address to determine your approximate location (city and country) for display on our interactive world map. This helps showcase the global reach of our portfolio visitors.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white mb-1 text-sm sm:text-base">Visit Statistics</h3>
                  <p className="leading-relaxed">We count each unique visit to our website to display visitor statistics. This includes timestamp information for when you visit our site.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white mb-1 text-sm sm:text-base">Technical Data</h3>
                  <p className="leading-relaxed">Basic technical information such as browser type and device information may be collected through standard web server logs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="bg-gray-900/50 rounded-lg p-4 sm:p-6 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">How We Use Your Data</h2>
            
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed"><strong>World Map Display:</strong> Your location data is used to show visitor distribution on our interactive world map</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed"><strong>Analytics:</strong> Visit counts help us understand portfolio engagement and reach</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed"><strong>User Experience:</strong> Data helps us improve site performance and user experience</p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-gray-900/50 rounded-lg p-4 sm:p-6 border border-gray-800">
            <div className="flex items-center mb-3 sm:mb-4">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-2 sm:mr-3" />
              <h2 className="text-xl sm:text-2xl font-semibold">How We Protect Your Data</h2>
            </div>
            
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">• <strong>No Personal Identification:</strong> We only collect general location data (city/country), not precise coordinates</p>
              <p className="leading-relaxed">• <strong>Secure Storage:</strong> All data is stored securely in encrypted databases</p>
              <p className="leading-relaxed">• <strong>No Sharing:</strong> We do not share, sell, or distribute your data to third parties</p>
              <p className="leading-relaxed">• <strong>Limited Retention:</strong> Data is retained only as long as necessary for the purposes described</p>
              <p className="leading-relaxed">• <strong>Anonymous Display:</strong> Location data displayed on our map is aggregated and anonymous</p>
            </div>
          </section>

          {/* Third Party Services */}
          <section className="bg-gray-900/50 rounded-lg p-4 sm:p-6 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Third-Party Services</h2>
            
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">We use the following third-party services:</p>
              <div className="pl-3 sm:pl-4 space-y-1 sm:space-y-2">
                <p className="leading-relaxed">• <strong>IP2Location.io:</strong> For converting IP addresses to location data</p>
                <p className="leading-relaxed">• <strong>MongoDB Atlas:</strong> For secure data storage</p>
                <p className="leading-relaxed">• <strong>Vercel/Netlify:</strong> For website hosting and analytics</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                These services have their own privacy policies which govern their data handling practices.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-gray-900/50 rounded-lg p-4 sm:p-6 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Your Rights</h2>
            
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">You have the right to:</p>
              <div className="pl-3 sm:pl-4 space-y-1 sm:space-y-2">
                <p className="leading-relaxed">• Know what data we collect about you</p>
                <p className="leading-relaxed">• Request deletion of your data</p>
                <p className="leading-relaxed">• Opt-out of data collection by using a VPN or blocking JavaScript</p>
                <p className="leading-relaxed">• Contact us with any privacy concerns</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gray-900/50 rounded-lg p-4 sm:p-6 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Us</h2>
            
            <div className="text-gray-300 text-sm sm:text-base">
              <p className="mb-2 sm:mb-3 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4">
                <p className="leading-relaxed">Email: <a href="mailto:krishna@krishnadev.work" className="text-blue-400 hover:text-blue-300 break-all">krishna@krishnadev.work</a></p>
                <p className="leading-relaxed">Website: <a href="/" className="text-blue-400 hover:text-blue-300">krishnadev.work</a></p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="bg-blue-900/20 rounded-lg p-4 sm:p-6 border border-blue-800/50">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-300">Policy Updates</h2>
            
            <div className="text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
            Thank you for visiting our portfolio. Your privacy and trust are important to us.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
