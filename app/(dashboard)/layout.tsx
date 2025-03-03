import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { UserNav } from "@/components/user-nav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/dashboard"
            className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent"
          >
            WMS
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/wardrobe"
              className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
            >
              My Wardrobe
            </Link>
            <Link
              href="/dashboard/outfits"
              className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
            >
              Outfits
            </Link>
            <Link
              href="/dashboard/labels"
              className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
            >
              Labels
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <UserNav user={session.user} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  )
} 