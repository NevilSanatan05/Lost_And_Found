import { useState } from 'react'

const mockLostItems = [
  {
    id: 1,
    title: 'Physics Book - HC Verma',
    location: 'Library, 2nd Floor',
    date: '2025-06-20',
    description: 'Green cover, has name “Ravi” written on the first page',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Black Lenovo Backpack',
    location: 'Canteen area',
    date: '2025-06-18',
    description: 'Has a laptop and charger inside, with CS notebook',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Calculator (Casio FX-991EX)',
    location: 'Physics Lab',
    date: '2025-06-17',
    description: 'Scientific calculator, slightly scratched back',
    image: 'https://via.placeholder.com/150',
  },
]

export default function LostItems() {
  const [search, setSearch] = useState('')

  const filteredItems = mockLostItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-2">🔍 Lost Items Directory</h1>
      <p className="text-gray-600 mb-6">Browse reported lost items. Use the search bar to filter by name or category.</p>

      {/* Search Bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by item name..."
        className="w-full p-3 border border-gray-300 rounded-xl mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {/* Items Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-3" />
            <h2 className="text-xl font-semibold text-indigo-600">{item.title}</h2>
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
