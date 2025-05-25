const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

app.use(express.json());

// GANTI DATA MAHASISWA
let mahasiswaList = [
  { name: 'Daffa Rizky Alfarizi', nim: '2311104110', course: ['AI Fundamentals', 'Data Mining'], year: 2022 },
  { name: 'Nadira Fathia Nurhaliza', nim: '2311104111', course: ['Mobile Development', 'UI/UX Research'], year: 2023 },
  { name: 'Rizwan Hakim Maulana', nim: '2311104112', course: ['Backend API', 'Cloud Infrastructure'], year: 2024 },
  { name: 'Syifa Rahmania Aulia', nim: '2311104113', course: ['Cyber Defense', 'Network Security'], year: 2023 },
  { name: 'Yusuf Alfan Pradipta', nim: '2311104114', course: ['Game Development', 'Software Testing'], year: 2022 }
];

// SWAGGER CONFIG
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mahasiswa API',
      version: '1.0.0',
      description: 'Simple API for managing Mahasiswa',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./09_API/JM/mahasiswa/index.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Mahasiswa:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         nim:
 *           type: string
 *         course:
 *           type: array
 *           items:
 *             type: string
 *         year:
 *           type: integer
 */

/**
 * @swagger
 * /api/mahasiswa:
 *   get:
 *     summary: Get all mahasiswa
 *     responses:
 *       200:
 *         description: List of mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mahasiswa'
 *
 *   post:
 *     summary: Add a new mahasiswa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mahasiswa'
 *     responses:
 *       201:
 *         description: Mahasiswa added
 *
 * /api/mahasiswa/{id}:
 *   get:
 *     summary: Get a mahasiswa by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of mahasiswa
 *     responses:
 *       200:
 *         description: Mahasiswa data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa not found
 *
 *   delete:
 *     summary: Delete a mahasiswa by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of mahasiswa
 *     responses:
 *       200:
 *         description: Mahasiswa deleted
 *       404:
 *         description: Mahasiswa not found
 */

// ROUTES
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});

app.get('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    res.json(mahasiswaList[id]);
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});

app.post('/api/mahasiswa', (req, res) => {
  const newMahasiswa = req.body;
  mahasiswaList.push(newMahasiswa);
  res.status(201).send('Mahasiswa added');
});

app.delete('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    mahasiswaList.splice(id, 1);
    res.send('Mahasiswa deleted');
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});
