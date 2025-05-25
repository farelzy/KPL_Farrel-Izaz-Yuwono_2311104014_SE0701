const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3000; 

app.use(express.json());

let movieList = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    stars: [
      'Tim Robbins',
      'Morgan Freeman',
      'William Sadler'
    ],
    description: 'A banker convicted of murder forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.'
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    stars: [
      'Marlon Brando',
      'Al Pacino',
      'James Caan'
    ],
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    stars: [
      'Christian Bale',
      'Heath Ledger',
      'Aaron Eckhart'
    ],
    description: 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.'
  }
];

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API FILM',
      version: '1.0.0',
      description: 'API FILM GOAT',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./09_API/JM/movie/movie.js'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         director:
 *           type: string
 *         stars:
 *           type: array
 *           items:
 *             type: string
 *         description:
 *           type: string
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movies'
 *
 *   post:
 *     summary: Add a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movies'
 *     responses:
 *       201:
 *         description: Movie added
 *
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of movie
 *     responses:
 *       200:
 *         description: Movies data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 *       404:
 *         description: Movie not found
 *
 *   delete:
 *     summary: Delete a movie by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of movie
 *     responses:
 *       200:
 *         description: Movie deleted
 *       404:
 *         description: Movie not found
 */

app.get('/api/movies', (req, res) => {
  res.json(movieList);
});

app.get('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movieList.length) {
    res.json(movieList[id]);
  } else {
    res.status(404).send('Movie not found');
  }
});

app.post('/api/movies', (req, res) => {
  const newMovie = req.body;
  movieList.push(newMovie);
  res.status(201).send('Movie added');
});

app.delete('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movieList.length) {
    movieList.splice(id, 1);
    res.send('Movie deleted');
  } else {
    res.status(404).send('Movie not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});