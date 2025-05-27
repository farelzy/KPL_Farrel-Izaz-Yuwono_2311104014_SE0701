# 🧮 GUI Cari Nilai Pangkat

**Nama**  : Farrel Izaz Yuwono
**NIM**   : 2311104014
**Mata Kuliah** : KPL
**Modul** : Modul 12 – Testing

---

## 📌 Deskripsi Program

Program ini menampilkan **tampilan GUI** berbasis HTML dan JavaScript sederhana yang memungkinkan pengguna untuk:

- Memasukkan dua nilai (a dan b).
- Menekan tombol **Hitung**.
- Menampilkan hasil pemangkatan dari nilai `a^b` menggunakan iterasi (tanpa `Math.pow`).

---

## 🧠 Logika Fungsi `CariNilaiPangkat(a, b)`

Program menggunakan logika berikut:

1. Jika `a = 0` dan `b = 0` → hasil = `1`
2. Jika `a < 0` → hasil = `-1`
3. Jika `b < 0` atau `b > 10` → hasil = `-2`
4. Jika `a^b > 1000` → hasil = `-3`
5. Jika semua valid → hitung hasil dengan perulangan `a * a * ...` sebanyak `b` kali

---

## 🖥️ Tampilan GUI

Terdiri dari:
- 2 buah `textbox` untuk input `a` dan `b`
- 1 buah `button` untuk menghitung
- 1 `label` hasil output

---

## 🔎 Contoh Output

| a  | b  | Hasil                      |
|----|----|----------------------------|
| 2  | 3  | Hasil dari 2 pangkat 3 = 8 |
| -2 | 3  | Error: Nilai a tidak boleh negatif |
| 2  | 11 | Error: Nilai b harus di antara 0 hingga 10 |
| 5  | 5  | Error: Hasil melebihi batas maksimum (1000) |
