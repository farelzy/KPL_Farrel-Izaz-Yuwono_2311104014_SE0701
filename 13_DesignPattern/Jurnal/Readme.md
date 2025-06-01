# 📘 Tugas Jurnal Modul 13 - Singleton Pattern (JavaScript)

## 👤 Identitas
- **Nama  :** Farrel Izaz Yuwono  
- **NIM   :** 2311104014  
- **Kelas :** SE-07-01  
- **Modul :** 13 - Design Pattern

---

## 🧠 Jawaban Soal Teori (Bagian B)

### 1. Contoh penggunaan Singleton:
- **Koneksi database**: hanya satu koneksi aktif agar efisien.
- **Logger sistem**: semua log dicatat dari satu instance.

### 2. Langkah-langkah implementasi Singleton:
- Buat properti static `_instance`.
- Cek jika `_instance` null → buat objek baru.
- Return `_instance` di setiap pemanggilan.
- Pastikan konstruktor tidak membuat instance baru jika sudah ada.

### 3. Tiga kelebihan & kekurangan Singleton:

**Kelebihan:**
- Menghemat memori (hanya satu instance).
- Akses mudah dan global.
- Cocok untuk shared resource (config/log/cache).

**Kekurangan:**
- Susah di-test karena sifat global.
- Bisa melanggar prinsip single responsibility.
- Dependency bisa tidak terlihat secara eksplisit.

---

## 💻 Implementasi Singleton

### 📁 File: `PusatDataSingleton.js`

```javascript
export class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }

    this.DataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  static GetDataSingleton() {
    if (!PusatDataSingleton._instance) {
      new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  GetSemuaData() {
    return this.DataTersimpan;
  }

  PrintSemuaData() {
    this.DataTersimpan.forEach((data, index) => {
      console.log(`${index}: ${data}`);
    });
  }

  AddSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  HapusSebuahData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    }
  }
}