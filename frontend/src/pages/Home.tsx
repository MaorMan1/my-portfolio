import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profilePic from '../assets/ProfilePic.jpg' // 👈 adjust path if needed

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-950 text-white">
      {/* 👤 Profile Picture */}
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6 border-4 border-indigo-500 shadow-lg"
      />

      <h1 className="text-5xl font-bold mb-6 text-gray-400">👋 Hi, I'm Maor Man</h1>

      <p className="text-xl max-w-3xl mb-8 leading-relaxed text-gray-400">
        I'm a passionate developer who enjoys turning ideas into working code.<br />
        I recently completed a B.Sc. in Computer Science and created games like Tetris and Blip and Blop using C++ and SFML.<br />
        I love writing clean and efficient code, and I care about user experience.<br />
        I also hold a diploma in Practical Electronics Engineering, with hands-on military experience in avionics systems.
      </p>

      <div className="flex space-x-6 text-4xl">
        <a
          href="https://github.com/MaorMan1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
        >
          <FaGithub title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/maorman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
        <a
          href="mailto:maorman777@gmail.com"
          className="hover:text-indigo-500 transition-colors"
        >
          <FaEnvelope title="Email" />
        </a>
      </div>
    </div>
  )
}

export default Home