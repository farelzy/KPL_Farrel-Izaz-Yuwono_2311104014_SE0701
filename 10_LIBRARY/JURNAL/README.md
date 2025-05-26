# 📝 LAPORAN PRAKTIKUM

**Nama**: Farrel Izaz Yuwono
**NIM**: 2311104014
**Mata Kuliah**: KPL
**Modul ke**: Modul 10 - Library  

---

## File Lib: `MathLib.js`

```js
const MatematikaLibraries = {
  FPB: function(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  },

  KPK: function(x, y) {
    const fpb = this.FPB(x, y);
    return (x * y) / fpb;
  },

  Turunan: function(z) {
    const hasil = [];
    for (let i = 1; i < z.length; i++) {
      const koef = z[i] * i;
      if (koef === 0) continue;
      const pangkat = i - 1;
      const term = pangkat === 0 ? `${koef}` :
                   pangkat === 1 ? `${koef}x` :
                   `${koef}x^${pangkat}`;
      hasil.push(term);
    }
    return hasil.join(' + ').replace(/\+ -/g, '- ');
  },

  Integral: function(z) {
    const hasil = [];
    for (let i = 0; i < z.length; i++) {
      const koef = z[i];
      const penyebut = i + 1;
      const term = `${koef}/${penyebut}x^${penyebut}`;
      hasil.push(term);
    }
    hasil.push('C');
    return hasil.join(' + ').replace(/\+ -/g, '- ');
  }
};

module.exports = MatematikaLibraries;
```

---

## File main: `main.js`

```js
const MathLib = require('./MathLib');

console.log('FPB:', MathLib.FPB(60, 45));
console.log('KPK:', MathLib.KPK(12, 8));
console.log('Turunan:', MathLib.Turunan([1, 4, -12, 9]));
console.log('Integral:', MathLib.Integral([4, 6, -12, 9]));
```

---

## 💻 Output Program

Jalankan program dengan perintah:

```bash
node main.js
```

Akan menghasilkan output:

```
FPB: 15
KPK: 24
Turunan: 4 - 24x + 27x^2
Integral: 4/1x^1 + 6/2x^2 + -12/3x^3 + 9/4x^4 + C
```

---

## 📌 Kesimpulan

Dari praktikum ini, dapat disimpulkan bahwa kita dapat mengembangkan dan menggunakan berbagai fungsi matematika seperti FPB, KPK, Turunan, dan Integral secara modular dalam JavaScript menggunakan `require()` dan `module.exports`. Ini mempermudah manajemen kode dan meningkatkan keterbacaan serta pemeliharaan program.

---

**Terima Kasih :)**
