const KodeBuah = require("./KodeBuah");
const PosisiKarakterGame = require("./PosisiKarakterGame");


console.log("===== Kode Buah =====");
const kodeBuah = new KodeBuah();
const daftarBuah = [
    "Apel", "Aprikot", "Alpukat", "Pisang", "Paprika",
    "Blackberry", "Ceri", "Kelapa", "Jagung", "Kurma",
    "Durian", "Anggur", "Melon", "Semangka"
];

daftarBuah.forEach((buah) => {
    console.log(`Kode buah untuk ${buah}: ${kodeBuah.getKodeBuah(buah)}`);
});


//karaktergame
console.log("\n===== Posisi Karakter Game =====");
const karakter = new PosisiKarakterGame();

console.log("State awal:", karakter.getState());
karakter.ubahState("TombolW");
karakter.ubahState("TombolS");