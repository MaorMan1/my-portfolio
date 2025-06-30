import { useEffect, useState } from 'react'

type Project = {
  id: number
  name: string
  tech: string[]
  description: string
  year: number
}

function App() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('https://portfolio-backend-v3in.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">🎮 My Game Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{project.description}</p>
            <div className="text-sm">
              <strong>Technologies:</strong> {project.tech.join(', ')}
            </div>
            <div className="text-sm">
              <strong>Year:</strong> {project.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
