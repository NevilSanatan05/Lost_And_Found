import { useState } from 'react'

export default function ReportFound() {
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
    console.log('Found Item Data:', formData)

    // TODO: Upload image and save found item data to Firebase
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">📦 Report a Found Item</h1>
      <p className="mb-6 text-gray-600">Thank you for helping someone out! Please fill in the details about the item you found so the owner can identify it.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Item Name *</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., Black Wallet"
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
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Any ID inside? Marks? Appearance?"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Found Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., Parking Lot, Hostel Gate"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Date Found *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="w-full bg-green-600 text-white py-3 rounded-md text-lg hover:bg-green-700 transition"
        >
          📨 Submit Found Report
        </button>
      </form>
    </div>
  )
}
