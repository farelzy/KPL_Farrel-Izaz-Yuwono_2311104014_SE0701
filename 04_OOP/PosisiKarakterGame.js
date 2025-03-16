class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri"; // State awal
    }

    ubahState(aksi) {
        switch (this.state) {
            case "Berdiri":
                if (aksi === "TombolW") {
                    console.log("Posisi take off → Karakter Terbang");
                    this.state = "Terbang";
                }
                break;

            case "Terbang":
                if (aksi === "TombolS") {
                    console.log("Posisi landing → Karakter Jongkok");
                    this.state = "Jongkok";
                }
                break;

            default:
                console.log("Aksi tidak valid");
        }
    }

    getState() {
        return this.state;
    }
}

module.exports = PosisiKarakterGame;