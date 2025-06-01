# 🔐 Secure Login App (HTML + JavaScript)

## 👤 Identitas
- **Nama  :** Farrel Izaz Yuwono  
- **NIM   :** 2311104014  
- **Kelas :** SE-07-01  
- **Topik :** Secure Coding

---

## 📌 Deskripsi Aplikasi
Aplikasi ini adalah simulasi **aplikasi login desktop** berbasis HTML + JavaScript yang menerapkan prinsip **Secure Coding**, seperti:
- Validasi input (`username`, `password`)
- Manajemen password menggunakan **SHA-256 hashing**
- Penyimpanan data ke file `users.json`

---

## 🛡️ Fitur Keamanan

### ✅ A. Input Validation
1. **Range Validasi:**
   - Username hanya huruf alfabet (ASCII)
   - Password harus mengandung angka dan karakter spesial

2. **Validasi Panjang Data:**
   - Username: 4–20 karakter
   - Password: 8–20 karakter

3. **Penanganan Data Tidak Valid:**
   - Menampilkan pesan kesalahan spesifik di UI jika input invalid
   - Mencegah error runtime melalui validasi eksplisit

---

### ✅ B. Password Management
1. **Password Hashing:**
   - Password disimpan dalam format hash menggunakan **SHA-256** melalui Web Crypto API
   - Tidak ada password plaintext yang disimpan

2. **Password Rules:**
   - Password wajib mengandung:
     - Minimal 1 angka
     - Minimal 1 karakter spesial (!@#$%^&*)
     - Tidak boleh mengandung username

---

## 🧪 Cara Menjalankan
1. Buka file `index.html` di browser (Chrome disarankan)
2. Isi form registrasi
3. File `users.json` akan otomatis ter-*download*
4. Coba login menggunakan data yang sama

---

## 📁 Struktur File