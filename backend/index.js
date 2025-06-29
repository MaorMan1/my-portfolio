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
      tech: ['C++', 'SFML'],
      description: 'A 2D Tetris remake using C++ and SFML.',
      year: 2025
    },
    // Add more projects later
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('💻 Backend is alive and running!');
});
