import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profilePic from '../assets/ProfilePic.jpg'

function Home() {
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

      <p className="text-xl max-w-3xl mb-8 leading-relaxed z-10 text-gray-400">
        I'm a passionate developer who enjoys turning ideas into working code.<br />
        I recently completed a B.Sc. in Computer Science and created games like Tetris and Blip and Blop using C++ and SFML.<br />
        I love writing clean and efficient code, and I care about user experience.<br />
        I also hold a diploma in Practical Electronics Engineering, with hands-on military experience in avionics systems.
      </p>

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
