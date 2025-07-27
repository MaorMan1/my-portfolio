import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Play from './pages/Play'

function App() {
  const location = useLocation()  
  const currentPath = location.pathname
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/')

  return (
    <div className="font-pixel min-h-screen bg-main-bg bg-cover bg-center bg-no-repeat text-white dark:text-white dark:bg-black">
      <nav className="sticky top-0 z-50 bg-gray-900 px-6 py-4 shadow-lg border-b border-gray-800 backdrop-blur-md bg-opacity-40 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-purple-600">Maor's Portfolio</div>

          <div className="flex gap-6 items-center">
            <Link
              to="/"
              className={`hover:text-purple-600 transition-colors ${
                isActive('/') && currentPath === '/' ? 'text-purple-600 font-semibold' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`hover:text-purple-600 transition-colors ${
                isActive('/projects') ? 'text-purple-600 font-semibold' : 'text-gray-300'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/education"
              className={`hover:text-purple-600 transition-colors ${
                isActive('/education') ? 'text-purple-600 font-semibold' : 'text-gray-300'
              }`}
            >
              Education
            </Link>
            <Link
              to="/experience"
              className={`hover:text-purple-600 transition-colors ${
                isActive('/experience') ? 'text-purple-600 font-semibold' : 'text-gray-300'
              }`}
            >
              Experience
            </Link>
            <Link
              to="/play"
              className={`hover:text-purple-600 transition-colors ${
                isActive('/play') ? 'text-purple-600 font-semibold' : 'text-gray-300'
              }`}
            >
              Play
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 px-3 py-1 text-sm rounded bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              {darkMode ? '🌞 Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
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
