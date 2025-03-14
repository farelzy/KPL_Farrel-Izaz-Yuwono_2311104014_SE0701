class KodeBuah {
    constructor() {
        this.table = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Blackberry": "F00",
            "Ceri": "H00",
            "Kelapa": "I00",
            "Jagung": "J00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.table[namaBuah] || "Kode tidak ditemukan";
    }
}

function testKodeBuah() {
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
}