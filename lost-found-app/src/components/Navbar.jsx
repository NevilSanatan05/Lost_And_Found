import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) =>
    location.pathname === path ? 'text-indigo-600 font-semibold' : 'text-gray-700'

  return (
    <nav className="bg-white shadow sticky top-0 z-50 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">Lost & Found</Link>

      <div className="space-x-4">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/report-lost" className={isActive('/report-lost')}>Report Lost</Link>
        <Link to="/report-found" className={isActive('/report-found')}>Report Found</Link>
        <Link to="/lost-items" className={isActive('/lost-items')}>Lost Items</Link>
        <Link to="/found-items" className={isActive('/found-items')}>Found Items</Link>
        <Link to="/my-reports" className={isActive('/my-reports')}>My Reports</Link>
        <Link to="/login" className={isActive('/login')}>Login</Link>
      </div>
    </nav>
  )
}
