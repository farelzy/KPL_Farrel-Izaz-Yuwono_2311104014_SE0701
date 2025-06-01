# TP Modul 13 - Design Pattern

## Identitas
- **Nama:** Farrel Izaz Yuwono  
- **NIM:** 2311104014  
- **Kelas:** SE-07-01  

## Deskripsi Tugas
Tugas ini bertujuan untuk memahami dan mengimplementasikan salah satu _design pattern_, yaitu **Observer Pattern**. Implementasi dilakukan menggunakan JavaScript (ES6 Modules) dalam bentuk aplikasi console sederhana.

---

## 📌 Penjelasan Design Pattern "Observer"

### ✅ Contoh Penggunaan
Observer Pattern cocok digunakan ketika suatu objek (Subject) harus memberitahu banyak objek lain (Observers) tentang perubahan state-nya.  
**Contoh kasus:**  
- Aplikasi email yang memberi notifikasi ke pengguna saat ada pesan baru.
- Sistem monitoring file yang memberi tahu banyak layanan saat file berubah.

### ⚙️ Langkah-langkah Implementasi
1. Buat class `Publisher` (Subject) yang menyimpan daftar observer.
2. Tambahkan method `subscribe`, `unsubscribe`, dan `notify`.
3. Buat class `Subscriber` dengan method `update`.
4. Saat state diubah di `Publisher`, semua `Subscriber` dipanggil dengan `update`.

### ➕➖ Kelebihan dan Kekurangan
**Kelebihan:**
- Loose coupling antara subject dan observer.
- Cocok untuk arsitektur event-driven.

**Kekurangan:**
- Bisa sulit di-debug saat observer terlalu banyak.
- Performa bisa menurun jika observer melakukan proses berat.

---

## 🛠️ Struktur Project

