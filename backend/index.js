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
      year: 2025
    },
    {
      id: 2,
      name: 'Blip&Blop Remake',
      tech: ['C++', 'SFML', 'OOP'],
      description: 'A 2D shooters platform game as a final project for an OOP course, using C++ and the SFML library. The game features players defeating enemies and bosses, avoiding bombs, and collecting weapons while navigating through levels.',
      year: 2023
    },
    {
      id: 3,
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
