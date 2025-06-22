import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center shadow">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">Welcome to Campus Lost & Found</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Lost something? Found something? We've got your back. Search, report, and recover lost items in just a few clicks.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/report-lost" className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">Report Lost Item</Link>
          <Link to="/report-found" className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">Report Found Item</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">1. Report Lost or Found</h3>
            <p>Fill a simple form to report your lost or found item with location and description.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">2. Smart Matching</h3>
            <p>We’ll alert you if someone reports an item that matches yours using smart match logic.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">3. Reconnect & Return</h3>
            <p>Chat anonymously or leave with admin desk — safely reconnect lost items to their owners.</p>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">Start Exploring</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/lost-items" className="bg-red-100 hover:bg-red-200 px-6 py-4 rounded-xl text-lg font-medium text-red-600">
            View Lost Items
          </Link>
          <Link to="/found-items" className="bg-green-100 hover:bg-green-200 px-6 py-4 rounded-xl text-lg font-medium text-green-600">
            View Found Items
          </Link>
          <Link to="/my-reports" className="bg-blue-100 hover:bg-blue-200 px-6 py-4 rounded-xl text-lg font-medium text-blue-600">
            My Reports
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Lost & Found • Built with ❤️ by students for students.
      </footer>
    </div>
  )
}
