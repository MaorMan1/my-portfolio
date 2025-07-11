import { useEffect, useState } from 'react'

type Project = {
  id: number
  name: string
  tech: string[]
  description: string
  year: number
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('https://portfolio-backend-v3in.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))  
      .catch((err) => console.error("Failed to fetch projects:", err))
  }, [])

return (
  <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">🎮 My Game Projects</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-left w-full sm:w-80"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-200 mb-2">{project.description}</p>
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
  </div>
)
}

export default Projects
