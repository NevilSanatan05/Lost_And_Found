import { useState } from 'react'

export default function ReportLost() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    location: '',
    date: '',
    image: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Lost Item Data:', formData)

    // TODO: Connect with Firebase
    // Upload image (optional), then save to Firestore
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">📄 Report a Lost Item</h1>
      <p className="mb-6 text-gray-600">Please provide as much detail as possible. This will help us match your item if someone finds it.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Item Name *</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g., Physics Book - HC Verma"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Color, labels, condition, etc."
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Lost Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g., Library, Canteen, Lab Block"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Date Lost *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Upload Image (optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg hover:bg-indigo-700 transition"
        >
          🚀 Submit Lost Report
        </button>
      </form>
    </div>
  )
}
