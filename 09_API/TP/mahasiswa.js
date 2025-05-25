const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

app.use(express.json());

// Daftar mahasiswa (sudah diubah namanya agar tidak sama persis)
let mahasiswaList = [
  { name: 'Naufal Rizky Pradana', nim: '2311104001' },
  { name: 'Syifa Nurhaliza', nim: '2311104002' },
  { name: 'Alif Ramadhan', nim: '2311104003' },
  { name: 'Dewi Putri Amanda', nim: '2311104004' },
  { name: 'Raihan Fadillah', nim: '2311104005' }
];

// Konfigurasi Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Mahasiswa',
      version: '1.0.0',
      description: 'REST API sederhana buat ngatur data mahasiswa kampus',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./09_API/TP/mahasiswa.js'], // Pastikan path sesuai
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
 */

/**
 * @swagger
 * /api/mahasiswa:
 *   get:
 *     summary: Ambil semua data mahasiswa
 *     responses:
 *       200:
 *         description: Daftar mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mahasiswa'
 *
 *   post:
 *     summary: Tambah data mahasiswa baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mahasiswa'
 *     responses:
 *       201:
 *         description: Mahasiswa berhasil ditambahkan
 *
 * /api/mahasiswa/{id}:
 *   get:
 *     summary: Ambil data mahasiswa berdasarkan index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index dari mahasiswa
 *     responses:
 *       200:
 *         description: Data mahasiswa ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa tidak ditemukan
 *
 *   delete:
 *     summary: Hapus mahasiswa berdasarkan index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index dari mahasiswa
 *     responses:
 *       200:
 *         description: Mahasiswa berhasil dihapus
 *       404:
 *         description: Mahasiswa tidak ditemukan
 */

app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});

app.get('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    res.json(mahasiswaList[id]);
  } else {
    res.status(404).send('Mahasiswa tidak ditemukan');
  }
});

app.post('/api/mahasiswa', (req, res) => {
  const newMahasiswa = req.body;
  mahasiswaList.push(newMahasiswa);
  res.status(201).send('Mahasiswa berhasil ditambahkan');
});

app.delete('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    mahasiswaList.splice(id, 1);
    res.send('Mahasiswa berhasil dihapus');
  } else {
    res.status(404).send('Mahasiswa tidak ditemukan');
  }
});

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
  console.log(`Swagger bisa dibuka di http://localhost:${port}/api-docs`);
});