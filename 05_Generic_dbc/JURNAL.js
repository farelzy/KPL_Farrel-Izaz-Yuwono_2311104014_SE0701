class Penjumlahan {
    jumlahTigaAngka(a, b, c) {
        return a + b + c;
    }
}

function getTypedValues(nim, angka1, angka2, angka3) {
    let lastDigit = parseInt(nim.toString().slice(-1));

    if (lastDigit === 1 || lastDigit === 2) {
        return [parseFloat(angka1), parseFloat(angka2), parseFloat(angka3)]; // Float
    } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
        return [parseFloat(angka1), parseFloat(angka2), parseFloat(angka3)]; // Double (di JS sama dengan float)
    } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
        return [parseInt(angka1), parseInt(angka2), parseInt(angka3)]; // Int
    } else {
        return [BigInt(angka1), BigInt(angka2), BigInt(angka3)]; // Long (pakai BigInt di JS)
    }
}

let nim = 2311104014;
let angka1 = 23, angka2 = 11, angka3 = 10;

let [typed1, typed2, typed3] = getTypedValues(nim, angka1, angka2, angka3);
let calculator = new Penjumlahan();
let hasil = calculator.jumlahTigaAngka(typed1, typed2, typed3);

console.log(`Hasil Penjumlahan (${typeof typed1}):`, hasil);
