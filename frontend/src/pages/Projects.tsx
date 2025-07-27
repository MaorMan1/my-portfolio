import { useEffect, useState } from 'react'

type Project = {
  id: number
  name: string
  tech: string[]
  shortDesc: string
  fullDesc: string
  year: number
  github?: string
  youtube?: string
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://portfolio-backend-v3in.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err))
  }, [])

  const toggleExpand = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <div className="min-h-screen text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">🎮 My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/80 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform text-left w-full max-w-sm cursor-pointer"
              onClick={() => toggleExpand(project.id)}
            >
              <h2 className="text-xl font-semibold mb-2 text-indigo-400">{project.name}</h2>
              <p className="text-sm text-gray-300 mb-2">
                {expandedId === project.id ? project.fullDesc : project.shortDesc}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                <strong>Tech:</strong> {project.tech.join(', ')}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Year:</strong> {project.year}
              </p>

              {(project.github || project.youtube) && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {project.youtube && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedVideo(project.youtube!)
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-semibold"
                    >
                      Watch Video
                    </button>
                  )}
                </div>
              )}

              <p className="text-indigo-500 mt-2 text-sm">
                {expandedId === project.id ? 'Click to collapse ▲' : 'Click to expand ▼'}
              </p>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="w-full max-w-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={selectedVideo.replace('watch?v=', 'embed/')}
                  title="Project Video"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="mt-4 text-sm text-gray-400 hover:text-white block mx-auto"
              >
                ✖ Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
