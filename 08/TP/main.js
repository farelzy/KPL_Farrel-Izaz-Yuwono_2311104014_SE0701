const readline = require('readline');
const CovidConfig = require('./CovidConfig');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const configHandler = new CovidConfig();
let config = configHandler.getConfig();

// Panggil ubah satuan
configHandler.ubahSatuan();
config = configHandler.getConfig(); // Refresh config setelah ubah satuan

console.log(`Satuan suhu saat ini: ${config.satuan_suhu}`);

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhuInput) => {
    rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ', (hariInput) => {
        const suhu = parseFloat(suhuInput);
        const hari = parseInt(hariInput);

        let suhuNormal = false;

        if (config.satuan_suhu.toLowerCase() === 'celcius') {
            suhuNormal = (suhu >= 36.5 && suhu <= 37.5);
        } else if (config.satuan_suhu.toLowerCase() === 'fahrenheit') {
            suhuNormal = (suhu >= 97.7 && suhu <= 99.5);
        }

        if (suhuNormal && hari < config.batas_hari_deman) {
            console.log(config.pesan_diterima);
        } else {
            console.log(config.pesan_ditolak);
        }

        rl.close();
    });
});