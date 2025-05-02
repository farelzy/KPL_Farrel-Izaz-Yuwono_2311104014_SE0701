const fs = require('fs');

class KuliahMahasiswa2311104014 {
    static ReadJSON() {
        try {
            const data = fs.readFileSync('./07/TP/TP7_2_2311104014.json', 'utf8');
            const obj = JSON.parse(data);

            console.log("\nDaftar mata kuliah yang diambil:");
            obj.matakuliah.forEach((mk, index) => {
                console.log(`MK ${index + 1} ${mk.kode} - ${mk.nama}`);
            });
        } catch (error) {
            console.error("Gagal membaca atau parsing JSON:", error);
        }
    }
}

module.exports = KuliahMahasiswa2311104014;