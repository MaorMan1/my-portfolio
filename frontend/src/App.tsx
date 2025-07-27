import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Play from './pages/Play'

function App() {
  const location = useLocation()
  const currentPath = location.pathname
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/')

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`hover:text-purple-600 transition-colors ${
          isActive('/') && currentPath === '/' ? 'text-purple-600 font-semibold' : 'text-gray-300'
        }`}
      >
        Home
      </Link>
      <Link
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className={`hover:text-purple-600 transition-colors ${
          isActive('/projects') ? 'text-purple-600 font-semibold' : 'text-gray-300'
        }`}
      >
        Projects
      </Link>
      <Link
        to="/education"
        onClick={() => setMenuOpen(false)}
        className={`hover:text-purple-600 transition-colors ${
          isActive('/education') ? 'text-purple-600 font-semibold' : 'text-gray-300'
        }`}
      >
        Education
      </Link>
      <Link
        to="/experience"
        onClick={() => setMenuOpen(false)}
        className={`hover:text-purple-600 transition-colors ${
          isActive('/experience') ? 'text-purple-600 font-semibold' : 'text-gray-300'
        }`}
      >
        Experience
      </Link>
      <Link
        to="/play"
        onClick={() => setMenuOpen(false)}
        className={`hover:text-purple-600 transition-colors ${
          isActive('/play') ? 'text-purple-600 font-semibold' : 'text-gray-300'
        }`}
      >
        Play
      </Link>
    </>
  )

  return (
    <div className="font-pixel min-h-screen bg-main-bg bg-cover bg-center bg-no-repeat text-white dark:text-white dark:bg-black">
      <nav
        className={`
          sticky top-0 z-50 px-6 py-4 shadow-lg border-b backdrop-blur-md transition-colors duration-300
          ${darkMode ? 'bg-gray-900 bg-opacity-40 border-gray-800' : 'bg-white bg-opacity-60 border-gray-300 text-gray-800'}
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-purple-600">Maor's Portfolio</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1 rounded text-sm border border-gray-400 hover:border-purple-500"
            >
              {darkMode ? '🌞 Light' : '🌙 Dark'}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col gap-4 mt-4 md:hidden text-sm">
            {navLinks}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded border border-gray-400 w-fit self-start ml-2"
            >
              {darkMode ? '🌞 Light' : '🌙 Dark'}
            </button>
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
