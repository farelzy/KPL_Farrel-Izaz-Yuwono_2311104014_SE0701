export class Subscriber {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`[${this.name}] menerima update data: ${data}`);
    }
}