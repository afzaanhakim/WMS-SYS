import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { db } from "@/lib/db"
import * as z from "zod"
import { Prisma } from "@prisma/client"

const userSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password } = userSchema.parse(body)

    // Check if email already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      )
    }

    const hashedPassword = await hash(password, 10)

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      } as Prisma.UserCreateInput & { password: string },
    })

    const { password: _, ...userWithoutPassword } = user as (typeof user & { password: string })

    return NextResponse.json(
      { user: userWithoutPassword },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
} 