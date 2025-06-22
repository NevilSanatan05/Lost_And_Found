import { useState } from 'react'

const mockFoundItems = [
  {
    id: 1,
    title: 'Wallet with ID Card',
    location: 'Main Gate Security Desk',
    date: '2025-06-21',
    description: 'Brown leather wallet with student ID card of Priya Sharma',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Umbrella (Blue)',
    location: 'Outside Hostel C',
    date: '2025-06-20',
    description: 'Foldable umbrella with name tag “Ashwin”',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Tiffin Box',
    location: 'Mess Hall',
    date: '2025-06-19',
    description: 'Steel tiffin box with yellow cover. No label on it.',
    image: 'https://via.placeholder.com/150',
  },
]

export default function FoundItems() {
  const [search, setSearch] = useState('')

  const filteredItems = mockFoundItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-2">🧾 Found Items Directory</h1>
      <p className="text-gray-600 mb-6">See all items that students have found and submitted. Help return them!</p>

      {/* Search Bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by item name..."
        className="w-full p-3 border border-gray-300 rounded-xl mb-8 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* Items Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-3" />
            <h2 className="text-xl font-semibold text-green-700">{item.title}</h2>
            <p className="text-gray-700 mb-1">{item.description}</p>
            <p className="text-sm text-gray-500">📍 {item.location}</p>
            <p className="text-sm text-gray-500">📅 {item.date}</p>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <p className="text-center text-red-600 mt-10">No items matched your search.</p>
      )}
    </div>
  )
}
