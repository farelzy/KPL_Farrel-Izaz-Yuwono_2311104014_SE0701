const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan Huruf: ', (input)=> {
    if (input === 'A' || input === 'I' || input === 'U' || input === 'E' || input === 'O') {
        console.log(`Huruf ${input} Adalah Konsonan`)
    } else {
        console.log(`${input} bukan huruf konsonan`)
    }
    rl.close();
})  