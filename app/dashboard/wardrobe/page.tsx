import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ClothingItem {
  id: string
  name: string
  category: string
  imageUrl: string
}

export default function WardrobePage() {
  const [items, setItems] = useState<ClothingItem[]>([])
  const [newItem, setNewItem] = useState<ClothingItem>({ id: "", name: "", category: "", imageUrl: "" })

  useEffect(() => {
    // Fetch existing clothing items from the API
    const fetchItems = async () => {
      const response = await fetch("/api/wardrobe")
      const data = await response.json()
      setItems(data)
    }
    fetchItems()
  }, [])

  const handleAddItem = async () => {
    // Add new clothing item to the API
    const response = await fetch("/api/wardrobe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
    const addedItem = await response.json()
    setItems([...items, addedItem])
    setNewItem({ id: "", name: "", category: "", imageUrl: "" }) // Reset form
  }

  const handleDeleteItem = async (id: string) => {
    // Delete clothing item from the API
    await fetch(`/api/wardrobe/${id}`, {
      method: "DELETE",
    })
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">My Wardrobe</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Add New Item</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.imageUrl}
          onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <Button onClick={handleAddItem}>Add Item</Button>
      </div>
      <h2 className="text-xl font-semibold">Clothing Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <div>
              <img src={item.imageUrl} alt={item.name} className="h-10 w-10 rounded mr-2" />
              <span>{item.name} - {item.category}</span>
            </div>
            <Button onClick={() => handleDeleteItem(item.id)} className="text-red-600">Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
} 