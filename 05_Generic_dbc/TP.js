class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const nim = "2311104014";
const data = new DataGeneric(nim);
data.PrintData();
