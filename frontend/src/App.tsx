import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Play from './pages/Play'

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const currentPath = location.pathname
  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/')

  useEffect(() => {
    // Auto-close menu on navigation
    setMenuOpen(false)
  }, [location])

  return (
    <div className="font-pixel min-h-screen bg-main-bg bg-cover bg-center bg-no-repeat text-white">
      <nav className="sticky top-0 z-50 bg-gray-900 bg-opacity-40 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-purple-600">Maor's Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/projects', label: 'Projects' },
              { to: '/education', label: 'Education' },
              { to: '/experience', label: 'Experience' },
              { to: '/play', label: 'Play' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-purple-600 transition-colors ${
                  isActive(link.to)
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen
                  ? 'M6 18L18 6M6 6l12 12' // X icon
                  : 'M4 6h16M4 12h16M4 18h16'} // Hamburger icon
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/projects', label: 'Projects' },
              { to: '/education', label: 'Education' },
              { to: '/experience', label: 'Experience' },
              { to: '/play', label: 'Play' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block hover:text-purple-400 transition-colors ${
                  isActive(link.to)
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  )
}

export default App
