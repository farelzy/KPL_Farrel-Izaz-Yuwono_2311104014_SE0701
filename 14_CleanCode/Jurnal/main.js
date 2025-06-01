// main.js
import { PusatDataSingleton } from './PusatDataSingleton.js';

// Mendapatkan instance tunggal
const dataOne = PusatDataSingleton.getInstance();
const dataTwo = PusatDataSingleton.getInstance();

// Menambahkan data anggota dan asisten
dataOne.addData("Farrel Izaz");
dataOne.addData("Kelompok SE0701");
dataOne.addData("Asisten: Kak Budi");

// Menampilkan semua data dari instance lain
console.log("Data dari dataTwo:");
dataTwo.printAllData();

// Menghapus data asisten
dataTwo.removeData(2);

// Cetak ulang data dari dataOne
console.log("Data dari dataOne setelah penghapusan:");
dataOne.printAllData();

// Menampilkan jumlah data
console.log(`Jumlah dataOne: ${dataOne.getAllData().length}`);
console.log(`Jumlah dataTwo: ${dataTwo.getAllData().length}`);
