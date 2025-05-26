# 📝 LAPORAN PRAKTIKUM

**Nama**: Farrel Izaz Yuwono 
**NIM**: 2311104014  
**Mata Kuliah**: KPL 
**Modul ke**: Modul 10 - Library  

---

##  File Lib: `AljabarLib.js`

```js
const AljabarLibraries = {
  AkarPersamaanKuadrat: function([a, b, c]) {
    const D = b * b - 4 * a * c;

    if (D < 0) return [];

    const akar1 = (-b + Math.sqrt(D)) / (2 * a);
    const akar2 = (-b - Math.sqrt(D)) / (2 * a);

    return [akar1, akar2];
  },

  HasilKuadrat: function([a, b]) {
    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;
    return [a2, ab2, b2];
  }
};

module.exports = AljabarLibraries;
```

---

## File main: `main.js`

```js
const Aljabar = require('./AljabarLib');

const akar = Aljabar.AkarPersamaanKuadrat([1, -3, -10]);
console.log('Akar Persamaan Kuadrat:', akar);

const hasilKuadrat = Aljabar.HasilKuadrat([2, -3]);
console.log('Hasil Kuadrat:', hasilKuadrat);
```

---

## 💻 Output Program

Saat program dijalankan dengan perintah:

```bash
node main.js
```

Akan menghasilkan output sebagai berikut:

```
Akar Persamaan Kuadrat: [ 5, -2 ]
Hasil Kuadrat: [ 4, -12, 9 ]
```

---

## 📌 Kesimpulan

Dari praktikum ini, dapat disimpulkan bahwa kita bisa membuat dan menggunakan library eksternal di JavaScript menggunakan `module.exports` dan `require()`. Fungsi `AkarPersamaanKuadrat` berhasil menghitung akar-akar dari persamaan kuadrat, dan `HasilKuadrat` mampu menghitung bentuk kuadrat sempurna dari suatu bentuk binomial.

---

**Terima Kasih :)**
