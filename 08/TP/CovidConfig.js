const fs = require('fs');

class CovidConfig {
    constructor() {
        this.filePath = 'covid_config.json';
        this.config = {
            satuan_suhu: "celcius",
            batas_hari_deman: 14,
            pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
            pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
        };

        this.loadConfig();
    }

    loadConfig() {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            this.config = JSON.parse(data);
        } else {
            this.saveConfig();
        }
    }

    saveConfig() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.config, null, 4));
    }

    ubahSatuan() {
        if (this.config.satuan_suhu.toLowerCase() === "celcius") {
            this.config.satuan_suhu = "fahrenheit";
        } else {
            this.config.satuan_suhu = "celcius";
        }
        this.saveConfig();
    }

    getConfig() {
        return this.config;
    }
}

module.exports = CovidConfig;