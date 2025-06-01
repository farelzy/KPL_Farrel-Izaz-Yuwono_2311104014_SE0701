import { PusatDataSingleton } from './PusatDataSingleton.js';

const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

data1.AddSebuahData("Anggota 1");
data1.AddSebuahData("Anggota 2");
data1.AddSebuahData("Asisten: Kak Budi");

console.log("Data2:");
data2.PrintSemuaData();

data2.HapusSebuahData(2);

console.log("Data1 setelah penghapusan:");
data1.PrintSemuaData();

console.log(`Jumlah data1: ${data1.GetSemuaData().length}`);
console.log(`Jumlah data2: ${data2.GetSemuaData().length}`);
