import { useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import profilePic from '../assets/ProfilePic.jpg'

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showGlow, setShowGlow] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setShowGlow(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    })
    setShowGlow(true)
  }

  const handleMouseLeave = () => setShowGlow(false)
  const handleTouchEnd = () => setShowGlow(false)

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center text-white overflow-hidden">
      {/* 🔮 Glow behind profile image */}
      <div className="absolute w-72 h-72 bg-indigo-600 opacity-30 blur-3xl rounded-full top-20 animate-pulse z-0" />

      {/* 👤 Profile Picture */}
      <div className="relative z-10">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mb-6 border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-300 z-10">
        👋 Hi, I'm Maor Man
      </h1>

      <p className="text-base sm:text-lg text-indigo-300 mb-4 sm:mb-6">
        Game Developer | Software Engineer | Avionics Technician
      </p>

      {/* 💬 Description */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleTouchEnd}
        className="relative group max-w-2xl sm:max-w-3xl px-2 sm:px-4 mb-8"
      >
        {/* Interactive Glow */}
        <div
          className={`absolute w-48 h-48 bg-indigo-500 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 ${
            showGlow ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${mousePos.x - 96}px, ${mousePos.y - 96}px)`,
          }}
        />

        <p className="text-base sm:text-xl leading-relaxed text-gray-300 z-10 relative">
          I'm a passionate developer who enjoys turning ideas into working code.<br />
          I recently completed a B.Sc. in Computer Science and created games like Tetris and Blip and Blop using C++ and SFML.<br />
          I love writing clean and efficient code, and I care about user experience.<br />
          I also hold a diploma in Practical Electronics Engineering, with hands-on military experience in avionics systems.
        </p>
      </div>

      {/* 🌐 Social Icons */}
      <div className="flex space-x-6 text-3xl sm:text-4xl mb-6 z-10">
        <a
          href="https://github.com/MaorMan1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-transform hover:scale-110 duration-200"
        >
          <FaGithub title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/maorman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-transform hover:scale-110 duration-200"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
        <a
          href="mailto:maorman777@gmail.com"
          className="hover:text-indigo-500 transition-transform hover:scale-110 duration-200"
        >
          <FaEnvelope title="Email" />
        </a>
      </div>

      {/* 🔗 Button to Projects */}
      <Link
        to="/projects"
        className="mt-4 px-6 py-3 bg-indigo-600 text-white font-bold rounded border-4 border-indigo-800 shadow-lg 
                hover:bg-indigo-700 hover:shadow-indigo-500 transition duration-300
                text-lg sm:text-xl tracking-wider"
      >
        ▶ View My Projects
      </Link>
    </div>
  )
}

export default Home
