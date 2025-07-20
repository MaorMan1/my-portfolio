const educationData = [
  {
    title: 'B.Sc. in Computer Science',
    institution: 'Hadassah Academic College, Jerusalem',
    period: '2021 - 2024',
    description: `Focused on software development, data structures, algorithms, and game programming. 
Developed multiple academic and personal projects including a Tetris remake and Blip & Blop.`
  },
  {
    title: 'Diploma in Practical Electronics Engineering',
    institution: 'ORT Colleges',
    period: '2014 - 2016',
    description: `Studied electronics theory, circuit design, and embedded systems. 
Gained hands-on skills with microcontrollers and hardware tools.`
  },
]

function Education() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">🎓 Education</h1>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.01] transition-transform"
            >
              <h2 className="text-2xl font-semibold text-indigo-400">{edu.title}</h2>
              <p className="text-sm text-gray-400 italic">{edu.institution} | {edu.period}</p>
              <p className="mt-4 text-gray-200 whitespace-pre-line">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
