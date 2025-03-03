import { Metadata } from "next"
import Link from "next/link"
import UserAuthForm from "@/components/auth/user-auth-form"

export const metadata: Metadata = {
  title: "Login | Wardrobe Management System",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6,#ec4899)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-90" />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-violet-600 to-pink-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Logo */}
      <Link 
        href="/"
        className="absolute top-8 left-8 text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300"
      >
        WMS
      </Link>

      {/* Login form */}
      <div className="w-full max-w-md animate-fade-up">
        <div className="relative bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 rounded-2xl p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-2xl" />
          <div className="relative space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Welcome back
              </h1>
              <p className="text-sm text-gray-500">
                Enter your credentials to access your account
              </p>
            </div>

            <UserAuthForm />

            <p className="text-center text-sm text-gray-500">
              <Link
                href="/register"
                className="font-medium text-violet-600 hover:text-pink-600 transition-colors duration-300"
              >
                Don&apos;t have an account? Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 