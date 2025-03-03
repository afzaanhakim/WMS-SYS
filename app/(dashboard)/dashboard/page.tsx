import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {session?.user?.name}</h2>
        <p className="text-gray-500 mt-2">Here's an overview of your wardrobe</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Total Items Card */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900">Total Items</h3>
          <p className="mt-2 text-3xl font-bold text-violet-600">0</p>
          <p className="mt-1 text-sm text-gray-500">items in your wardrobe</p>
        </div>

        {/* Categories Card */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900">Categories</h3>
          <p className="mt-2 text-3xl font-bold text-pink-600">0</p>
          <p className="mt-1 text-sm text-gray-500">different categories</p>
        </div>

        {/* Outfits Card */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900">Outfits</h3>
          <p className="mt-2 text-3xl font-bold text-violet-600">0</p>
          <p className="mt-1 text-sm text-gray-500">created outfits</p>
        </div>
      </div>

      {/* Recent Items Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Recent Items</h3>
        </div>
        <div className="p-6">
          <p className="text-center text-gray-500">No items added yet</p>
        </div>
      </div>
    </div>
  )
} 