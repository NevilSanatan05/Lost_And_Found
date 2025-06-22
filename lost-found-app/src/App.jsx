import { Routes, Route } from 'react-router-dom'

// Import all pages
import Home from './pages/Home'
import Login from './pages/Login'
import ReportLost from './pages/ReportLost'
import ReportFound from './pages/ReportFound'
import LostItems from './pages/LostItems'
import FoundItems from './pages/FoundItems'
import MyReports from './pages/MyReports'
import MatchPage from './pages/MatchPage'
import ItemDetail from './pages/ItemDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/report-lost" element={<ReportLost />} />
      <Route path="/report-found" element={<ReportFound />} />
      <Route path="/lost-items" element={<LostItems />} />
      <Route path="/found-items" element={<FoundItems />} />
      <Route path="/my-reports" element={<MyReports />} />
      <Route path="/match/:id" element={<MatchPage />} />
      <Route path="/item/:id" element={<ItemDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}
