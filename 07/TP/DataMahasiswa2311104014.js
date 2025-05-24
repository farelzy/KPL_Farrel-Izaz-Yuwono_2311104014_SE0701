const fs = require('fs');

class DataMahasiswa2311104014 {
    static ReadJSON() {
        try {
            const data = fs.readFileSync('./07/TP/TP7_1_2311104014.json', 'utf8');
            const mahasiswa = JSON.parse(data);
            
            // Print semua data
            console.log("=== Data Mahasiswa ===");
            console.log(`Nama     : ${mahasiswa.nama}`);
            console.log(`NIM      : ${mahasiswa.nim}`);
            console.log(`Fakultas  : ${mahasiswa.Fakultas}`);
            console.log(`Angkatan : ${mahasiswa.angkatan}`);
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca atau parsing file JSON:", error);
        }
    }
}

module.exports = DataMahasiswa2311104014;