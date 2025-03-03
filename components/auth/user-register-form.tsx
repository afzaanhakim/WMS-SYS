"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
})

export default function UserRegisterForm({ className, ...props }: UserRegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setIsLoading(false)

    if (!response.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your registration request failed. Please try again.",
        variant: "destructive",
      })
    }

    toast({
      title: "Success!",
      description: "Your account has been created.",
    })

    router.push("/login")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${className} space-y-6`} {...props}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </Label>
        <Input
          id="name"
          placeholder="John Doe"
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          disabled={isLoading}
          {...register("name")}
          className={`h-11 px-4 w-full rounded-lg border-2 ${
            errors.name ? "border-red-200" : "border-gray-200"
          } focus:border-violet-200 focus:ring-4 focus:ring-violet-100 transition-all duration-300`}
        />
        {errors?.name && (
          <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          disabled={isLoading}
          {...register("email")}
          className={`h-11 px-4 w-full rounded-lg border-2 ${
            errors.email ? "border-red-200" : "border-gray-200"
          } focus:border-violet-200 focus:ring-4 focus:ring-violet-100 transition-all duration-300`}
        />
        {errors?.email && (
          <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          id="password"
          placeholder="Create a secure password"
          type="password"
          autoCapitalize="none"
          autoComplete="new-password"
          disabled={isLoading}
          {...register("password")}
          className={`h-11 px-4 w-full rounded-lg border-2 ${
            errors.password ? "border-red-200" : "border-gray-200"
          } focus:border-violet-200 focus:ring-4 focus:ring-violet-100 transition-all duration-300`}
        />
        {errors?.password && (
          <p className="text-xs text-red-500 font-medium">{errors.password.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-medium transition-all duration-300 focus:ring-4 focus:ring-violet-200"
      >
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Create Account
      </Button>
    </form>
  )
} 