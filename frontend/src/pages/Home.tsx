import { useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profilePic from '../assets/ProfilePic.jpg'


function Home() {
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-950 text-white overflow-hidden">
      {/* 🔮 Glowing blurred background behind profile image */}
      <div className="absolute w-72 h-72 bg-indigo-600 opacity-30 blur-3xl rounded-full top-20 animate-pulse z-0" />

      {/* 👤 Profile Picture */}
      <div className="relative z-10">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6 border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className="text-5xl font-bold mb-6 text-gray-300 z-10">👋 Hi, I'm Maor Man</h1>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative group max-w-3xl mb-8"
      >
        {/* 🔵 Dynamic circular glow */}
        <div
          className="absolute w-48 h-48 bg-indigo-500 rounded-full opacity-60 blur-3xl pointer-events-none transition-transform duration-75"
          style={{
            transform: `translate(${mousePos.x - 96}px, ${mousePos.y - 96}px)`,
          }}
        />

        <p className="text-xl leading-relaxed text-gray-300 z-10 relative">
          I'm a passionate developer who enjoys turning ideas into working code.<br />
          I recently completed a B.Sc. in Computer Science and created games like Tetris and Blip and Blop using C++ and SFML.<br />
          I love writing clean and efficient code, and I care about user experience.<br />
          I also hold a diploma in Practical Electronics Engineering, with hands-on military experience in avionics systems.
        </p>
      </div>

      {/* 🌐 Social Links with hover effects */}
      <div className="flex space-x-6 text-4xl z-10">
        <a
          href="https://github.com/MaorMan1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors hover:scale-110 duration-200"
        >
          <FaGithub title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/maorman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors hover:scale-110 duration-200"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
        <a
          href="mailto:maorman777@gmail.com"
          className="hover:text-indigo-500 transition-colors hover:scale-110 duration-200"
        >
          <FaEnvelope title="Email" />
        </a>
      </div>
    </div>
  )
}

export default Home
