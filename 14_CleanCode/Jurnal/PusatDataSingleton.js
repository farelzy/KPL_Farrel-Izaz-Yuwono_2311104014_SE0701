// PusatDataSingleton.js
export class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }

    // Inisialisasi atribut penyimpanan data
    this.storedData = [];
    PusatDataSingleton._instance = this;
  }

  // Mengembalikan instance tunggal dari singleton
  static getInstance() {
    if (!PusatDataSingleton._instance) {
      new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  // Mengembalikan semua data dalam list
  getAllData() {
    return this.storedData;
  }

  // Menampilkan semua data ke console
  printAllData() {
    this.storedData.forEach((item, index) => {
      console.log(`${index}: ${item}`);
    });
  }

  // Menambahkan satu item data
  addData(input) {
    this.storedData.push(input);
  }

  // Menghapus item data berdasarkan index
  removeData(index) {
    if (index >= 0 && index < this.storedData.length) {
      this.storedData.splice(index, 1);
    }
  }
}
