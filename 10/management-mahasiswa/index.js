import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// welcome route
app.get('/', (req, res) => {
    res.send('Hello World! guysss kelas 01');
})

// create a mahasiswa route
app.post('/mahasiswa', (req, res) => {
    const {nim, nama_lengkap, email, no_hp, tanggal_lahir, jenis_kelamin} = req.body;

    res.status(201).json({
        statusCode: 201,
        message: 'Mahasiswa created successfully',
        data: {
            nim: nim,
            nama_lengkap: nama_lengkap,
            email: email,
            no_hp: no_hp,
            tanggal_lahir: tanggal_lahir,
            jenis_kelamin: jenis_kelamin
        }
    })
})

// get all mahasiswa route

// get a mahasiswa by id route

// update a mahasiswa by id route

// delete a mahasiswa by id route


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})