const readline = require('readline');

const array = Array.from({ length: 50 }, (_, index) => index);

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkNumber(num) {
    const number = parseInt(num);
    if (isNaN(number) || number < 1 || number > 10000) {
        console.log('Masukkan angka valid antara 1 sampai 10000');
        return;
    }

    if (isPrime(number)) {
        console.log(`${number} adalah bilangan prima.`);
    } else if (number % 3 === 0) {
        console.log(`${number} adalah kelipatan 3.`);
    } else {
        console.log(`${number} bukan bilangan prima dan bukan kelipatan 3.`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan angka antara 1 sampai 10000: ', (userInput) => {
    checkNumber(userInput);
    rl.close();
});