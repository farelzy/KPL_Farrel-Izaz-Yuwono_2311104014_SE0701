class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    toggle() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        } else {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        }
    }
}

export default DoorMachine;