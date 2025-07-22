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
      shortDesc: 'A 2D Tetris remake using C++ and SFML...',
      fullDesc: 'A 2D Tetris remake using C++ and SFML. Features pixel art graphics, game polish with animations, fire trails, and a leaderboard.',
      year: 2025,
      github: 'https://github.com/MaorMan1/Tetris-SFML.git',
      youtube: 'https://www.youtube.com/watch?v=E4neB076gwo'
    },
    {
      id: 2,
      name: 'Personal Portfolio Website (this website)',
      tech: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Node.js'],
      shortDesc: 'Retro-styled portfolio using React and Tailwind...',
      fullDesc: 'A retro pixel-themed personal portfolio website built using React and Tailwind CSS. Includes animated components, routing, mobile readiness, and backend integration with Node.js/Render.',
      year: 2025,
      github: 'https://github.com/MaorMan1/my-portfolio.git'
    },
    {
      id: 3,
      name: 'Blip&Blop Remake',
      tech: ['C++', 'SFML', 'OOP'],
      shortDesc: '2D shooter platform game with enemies, bosses...',
      fullDesc: 'A 2D shooters platform game as a final project for an OOP course. Built with C++ and SFML. Players defeat enemies and bosses, avoid bombs, and collect weapons across levels.',
      year: 2023,
      github: 'https://github.com/MaorMan1/Blip-and-Blop.git',
      youtube: 'https://www.youtube.com/watch?v=sUiOuJve188'
    },
    {
      id: 4,
      name: 'Pacman Remake',
      tech: ['C++', 'SFML', 'OOP'],
      shortDesc: 'A Pacman-style game built with C++ and SFML...',
      fullDesc: 'A Pacman-style game built with C++ and SFML. Includes classic gameplay mechanics, power pellets, and ghost AI.',
      year: 2022
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('💻 Backend is alive and running!');
});
