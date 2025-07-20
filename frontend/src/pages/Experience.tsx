import { useState } from 'react'

const experiences = [
  {
    id: 1,
    title: 'Apache Helicopter Avionics Technician',
    company: 'Israeli Air Force',
    location: 'Israel',
    period: '2016 - 2021',
    shortDesc: `Served as a technician handling avionics systems...`,
    fullDesc: `Served as an Apache helicopter technician, handling avionics maintenance and real-time troubleshooting in systems like fire control, navigation, communication, and electronic warfare. Led small technical teams and maintained high operational readiness under pressure.`,
  },
  {
    id: 2,
    title: 'Security Guard',
    company: 'Mobileye (via G1 Security)',
    location: 'Jerusalem',
    period: '2021 - 2025',
    shortDesc: `Worked night shifts while studying CS...`,
    fullDesc: `Worked as a night-shift security guard while completing my Computer Science degree. Used time effectively to study, build portfolio projects, and fund my tuition.`,
  },
]

function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">🛠 Work Experience</h1>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => toggleExpand(exp.id)}
            >
              <h2 className="text-2xl font-semibold text-indigo-400">{exp.title}</h2>
              <p className="text-sm text-gray-400 mb-1">
                {exp.company} – {exp.location}
              </p>
              <p className="text-sm text-gray-500 italic mb-3">{exp.period}</p>
              <p className="text-gray-300">
                {expandedId === exp.id ? exp.fullDesc : exp.shortDesc}
              </p>
              <p className="text-indigo-500 mt-2 text-sm">
                {expandedId === exp.id ? 'Click to collapse ▲' : 'Click to expand ▼'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
