import { useState } from 'react'

const mockLostReports = [
  {
    id: 1,
    title: 'Black Wallet',
    date: '2025-06-18',
    location: 'Cafeteria',
    status: 'Open',
  },
  {
    id: 2,
    title: 'Notebook - DSA',
    date: '2025-06-16',
    location: 'Library',
    status: 'Matched',
  },
]

const mockFoundReports = [
  {
    id: 1,
    title: 'Blue Pen Drive',
    date: '2025-06-19',
    location: 'Lab Block',
    status: 'Returned',
  },
]

export default function MyReports() {
  const [activeTab, setActiveTab] = useState('lost')

  const reports = activeTab === 'lost' ? mockLostReports : mockFoundReports

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-2">📋 My Reports</h1>
      <p className="text-gray-600 mb-6">View and manage your submitted reports.</p>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('lost')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'lost' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Lost Items
        </button>
        <button
          onClick={() => setActiveTab('found')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'found' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Found Items
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{report.title}</h2>
              <p className="text-gray-500">📅 {report.date} | 📍 {report.location}</p>
              <p className={`text-sm mt-1 font-medium ${report.status === 'Returned' ? 'text-green-600' : report.status === 'Matched' ? 'text-yellow-600' : 'text-gray-600'}`}>
                Status: {report.status}
              </p>
            </div>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}

        {reports.length === 0 && (
          <p className="text-gray-500 text-center mt-8">You haven't submitted any {activeTab} reports yet.</p>
        )}
      </div>
    </div>
  )
}
