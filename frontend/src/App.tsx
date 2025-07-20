import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const location = useLocation()  
  const currentPath = location.pathname // RealTime update

  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/')

  return (
    <div className="font-pixel min-h-screen bg-main-bg bg-cover bg-center bg-no-repeat text-white">
      <nav className="bg-gray-900 px-6 py-4 shadow-lg border-b border-gray-800">
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
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
