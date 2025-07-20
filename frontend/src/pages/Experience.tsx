const experiences = [
  {
    id: 1,
    title: 'Apache Helicopter Avionics Technician',
    company: 'Israeli Air Force',
    location: 'Israel',
    period: '2016 - 2021',
    description: `Served as an Apache helicopter technician, handling avionics maintenance and real-time troubleshooting in systems like fire control, navigation, communication, and electronic warfare.`,
  },
  {
    id: 2,
    title: 'Security Guard',
    company: 'Mobileye (via G1 Security)',
    location: 'Jerusalem',
    period: '2021 - 2025',
    description: `Worked as a night-shift security guard while completing my Computer Science degree. Used time effectively to study and work on coding projects and for degree payments.`,
  },
]

function Experience() {
    return (
        <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">🛠 Work Experience</h1>

                <div className="space-y-8">
                {experiences.map((exp) => (
                    <div
                    key={exp.id}
                    className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
                    >
                    <h2 className="text-2xl font-semibold text-indigo-400">{exp.title}</h2>
                    <p className="text-sm text-gray-400 mb-1">
                        {exp.company} – {exp.location}
                    </p>
                    <p className="text-sm text-gray-500 italic mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Experience