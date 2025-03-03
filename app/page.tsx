import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-cyan-500">
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300"
              >
                Wardrobe Management System
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300"
              >
                Sign In
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-24">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6,#ec4899)] opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-90" />
          </div>

          {/* Hero content */}
          <div className="relative pt-32 sm:pt-40 lg:pt-48">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-8 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Organize Your Wardrobe,{' '}
                  <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                    Elevate Your Style
                  </span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600">
                  Manage your clothing collection, create stunning outfits, and revolutionize your daily dressing routine with our intelligent wardrobe management system.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                      Start Free
                    </Button>
                  </Link>
                  <Link href="/login" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto h-12 px-8 border-2 border-gray-200 hover:border-violet-200 text-gray-900 font-medium transition-all duration-300 hover:bg-violet-50/50">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="relative bg-white/80 backdrop-blur-sm py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-violet-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-100 transition-colors duration-300 ring-8 ring-violet-50/10">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">Digital Inventory</h3>
                    <p className="text-gray-600">
                      Keep track of your entire wardrobe digitally with detailed information about each item.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-pink-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-100 transition-colors duration-300 ring-8 ring-pink-50/10">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">Outfit Creation</h3>
                    <p className="text-gray-600">
                      Mix and match items to create and save your favorite outfit combinations.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-violet-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-100 transition-colors duration-300 ring-8 ring-violet-50/10">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">Smart Labels</h3>
                    <p className="text-gray-600">
                      Organize your clothes with custom labels and categories for easy filtering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Wardrobe Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 