import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { Prisma } from "@prisma/client"



export async function GET() {
  const items = await db.item.findMany();
  return NextResponse.json(items)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newItem = await db.clothingItem.create({
    data: {
      name: body.name,
      category: body.category,
      imageUrl: body.imageUrl,
    },
  })
  return NextResponse.json(newItem, { status: 201 })
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }
  
  await db.clothingItem.delete({
    where: { id: id as string },
  })
  return NextResponse.json({ message: "Item deleted" }, { status: 204 })
} 