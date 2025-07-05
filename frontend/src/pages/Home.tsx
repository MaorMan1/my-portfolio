import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'

function Home() {
  return (
    <div className="text-center px-6 py-12">
      <img
        src="/profile.jpg" // 🔄 Replace this with the correct path to your image
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-indigo-500 shadow-md"
      />

      <h1 className="text-3xl font-bold mb-2">Hi, I'm Maor Man</h1>
      <h2 className="text-xl text-indigo-400 mb-4">
        Aspiring Game Developer | Software Engineer
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300 text-xl leading-relaxed">
        I'm a passionate developer who enjoys turning ideas into real, working projects through code.<br />
        I recently completed a B.Sc. in Computer Science and developed games like Tetris and Blip and Blop using C++ and SFML.<br />
        I'm eager to join the tech or gaming industry and constantly strive to improve my skills.<br />
        I focus on writing clean, efficient code and creating a smooth user experience.<br />
        I also hold a Practical Electronics Engineering diploma and gained hands-on experience in this field during my military service.
      </p>
      <div className="mt-6 flex justify-center gap-8 text-3xl">
        <a
          href="https://github.com/MaorMan1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-indigo-500 transition-colors"
        >
          <FaGithub className="text-5xl hover:text-indigo-500 transition-colors" title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/maorman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-indigo-500 transition-colors"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
        <a
          href="mailto:maorman777@gmail.com"
          className="text-5xl hover:text-indigo-500 transition-colors"
        >
          <FaEnvelope title="Email" />
        </a>
        <a 
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-indigo-500 transition-colors"
        >
          <FaFilePdf title="Download CV" />
        </a>
      </div>
    </div>
  )
}

export default Home