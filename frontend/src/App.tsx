import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Experience from './pages/Experience'

function App() {
  const location = useLocation()  
  const currentPath = location.pathname // RealTime update

  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/')

  return (
    <div className="font-pixel min-h-screen bg-main-bg bg-cover bg-center bg-no-repeat text-white">
      <nav className="sticky top-0 z-50 bg-gray-900 px-6 py-4 shadow-lg border-b border-gray-800 backdrop-blur-md bg-opacity-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-purple-600">Maor's Portfolio</div>

          <div className="flex gap-6">
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
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  )
}

export default App
