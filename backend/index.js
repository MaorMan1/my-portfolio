// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Tetris Remake',
      tech: ['C++', 'SFML', 'OOP'],
      description: 'A 2D Tetris remake using C++ and SFML.',
      year: 2025,
      github: 'https://github.com/MaorMan1/Tetris-SFML.git',
      youtube: 'https://www.youtube.com/watch?v=E4neB076gwo'
    },
    {
      id: 2,
      name: 'Personal Portfolio Website(this website)',
      tech: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Node.js'],
      description: 'A retro pixel-themed personal portfolio website built using React and Tailwind CSS. It includes multiple pages such as Home, Projects, Education, and Experience, with animated components, mobile-ready layout, and integration with a Node.js backend.',
      year: 2025,
      github: 'https://github.com/MaorMan1/my-portfolio.git'
    },
    {
      id: 3,
      name: 'Blip&Blop Remake',
      tech: ['C++', 'SFML', 'OOP'],
      description: 'A 2D shooters platform game as a final project for an OOP course, using C++ and the SFML library. The game features players defeating enemies and bosses, avoiding bombs, and collecting weapons while navigating through levels.',
      year: 2023,
      github: 'https://github.com/MaorMan1/Blip-and-Blop.git',
      youtube: 'https://www.youtube.com/watch?v=sUiOuJve188'
    },
    {
      id: 4,
      name: 'Pacman Remake',
      tech: ['C++', 'SFML', 'OOP'],
      description: 'A Pacman-style game built with C++ and SFML.',
      year: 2022
    }
    // Add more projects later
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('💻 Backend is alive and running!');
});
