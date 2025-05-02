const readline = require('readline');
const BankTransferConfig = require('./BankTransferConfig');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const configHandler = new BankTransferConfig();
const config = configHandler.getConfig();

// Step 1: Tanyakan jumlah uang
const promptAmount = config.lang === 'en' 
    ? "Please insert the amount of money to transfer: " 
    : "Masukkan jumlah uang yang akan di-transfer: ";

rl.question(promptAmount, (amountInput) => {
    const amount = parseInt(amountInput);

    // Step 2: Hitung biaya transfer
    let fee = amount <= config.transfer.threshold 
        ? config.transfer.low_fee 
        : config.transfer.high_fee;
    const total = amount + fee;

    if (config.lang === 'en') {
        console.log(`Transfer fee = ${fee}`);
        console.log(`Total amount = ${total}`);
    } else {
        console.log(`Biaya transfer = ${fee}`);
        console.log(`Total biaya = ${total}`);
    }

    // Step 3: Pilih metode transfer
    const promptMethod = config.lang === 'en' 
        ? "Select transfer method:" 
        : "Pilih metode transfer:";
    console.log(promptMethod);

    config.methods.forEach((method, index) => {
        console.log(`${index + 1}. ${method}`);
    });

    rl.question('Choose method (1/2/3/4): ', (methodInput) => {
        const methodChoice = parseInt(methodInput);

        if (methodChoice < 1 || methodChoice > config.methods.length) {
            console.log("Invalid method selection.");
            rl.close();
            return;
        }

        // Step 4: Konfirmasi transaksi
        const confirmationPrompt = config.lang === 'en' 
            ? `Please type "${config.confirmation.en}" to confirm the transaction: `
            : `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: `;

        rl.question(confirmationPrompt, (confirmationInput) => {
            const confirm = confirmationInput.trim().toLowerCase();

            if ((config.lang === 'en' && confirm === config.confirmation.en.toLowerCase()) ||
                (config.lang === 'id' && confirm === config.confirmation.id.toLowerCase())) {
                const successMessage = config.lang === 'en' 
                    ? "The transfer is completed" 
                    : "Proses transfer berhasil";
                console.log(successMessage);
            } else {
                const cancelMessage = config.lang === 'en' 
                    ? "Transfer is cancelled" 
                    : "Transfer dibatalkan";
                console.log(cancelMessage);
            }

            rl.close();                                                  
        });
    });
});