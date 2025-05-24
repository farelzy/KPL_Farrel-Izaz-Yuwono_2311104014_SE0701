const fs = require('fs');

class BankTransferConfig {
    constructor() {
        this.filePath = 'bank_transfer_config.json';
        this.config = {
            lang: "en",
            transfer: {
                threshold: 25000000,
                low_fee: 6500,
                high_fee: 15000
            },
            methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
            confirmation: {
                en: "yes",
                id: "ya"
            }
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

    getConfig() {
        return this.config;
    }
}

module.exports = BankTransferConfig;