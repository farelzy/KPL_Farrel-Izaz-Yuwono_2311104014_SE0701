import readline from "readline";

const challenge = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

challenge.question("Masukkan jumlah barang: ", (jumlah) => {
    let total = 0, count = 0;
    let barangList = []; // pakai array ref gpt biar ada nama nyee

    function inputBarang() {
        if (count < jumlah) {
            challenge.question(`\nNama barang ke-${count + 1}: `, (namaBarang) => {
                challenge.question(`Harga ${namaBarang}: Rp `, (harga) => {
                    let hargaBarang = parseFloat(harga); // membaca string desimal float ye guys
                    barangList.push({ nama: namaBarang, harga: hargaBarang }); // referensi chat gpt biar ada nama barang eheh
                    total += hargaBarang;
                    count++;
                    inputBarang();
                });
            });

        } else {
            let diskon = total > 100000 ? "Diskon Besar" : total >= 50000 ? "Diskon Sedang" : "Tidak Ada Diskon";

            console.log("\n=== Struk Belanja ===");
            barangList.forEach((barang, index) => {
                console.log(`${index + 1}. Nama: ${barang.nama} - Harga: Rp ${barang.harga.toLocaleString()}`); // pakai tolocalestring biar angkanya ada (,) gitu
            });
            console.log(`\nTotal Harga: Rp ${total.toLocaleString()}`);
            console.log(`Kategori Diskon: ${diskon}`);

            challenge.close();
        }
    }

    inputBarang();
});