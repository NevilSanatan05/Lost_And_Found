import { useParams } from 'react-router-dom'

export default function MatchPage() {
  const { id } = useParams()

  // Mock data for now — later fetch match using ID from Firebase
  const mockMatch = {
    title: 'Physics Book - HC Verma',
    description: 'Green cover with name “Ravi” inside. Found near Library.',
    date: '2025-06-20',
    location: 'Library, 2nd Floor',
    image: 'https://via.placeholder.com/300',
    finderName: 'Priya Sharma',
    finderEmail: 'priya@example.com',
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-green-700 mb-4">✅ Possible Match Found!</h1>
      <p className="text-gray-600 mb-6">We found an item that closely matches your lost report. Review the details below:</p>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={mockMatch.image}
          alt={mockMatch.title}
          className="w-full md:w-1/3 h-60 object-cover rounded-md border"
        />

        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-semibold text-indigo-700">{mockMatch.title}</h2>
          <p className="text-gray-700">{mockMatch.description}</p>
          <p className="text-sm text-gray-500">📍 Location: {mockMatch.location}</p>
          <p className="text-sm text-gray-500">📅 Found on: {mockMatch.date}</p>
          <p className="text-sm text-gray-500">👤 Reported by: {mockMatch.finderName}</p>
          <p className="text-sm text-blue-600 underline">📧 Contact: {mockMatch.finderEmail}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto">
          📬 Contact Finder
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition w-full sm:w-auto">
          ❌ Not My Item
        </button>
      </div>
    </div>
  )
}
