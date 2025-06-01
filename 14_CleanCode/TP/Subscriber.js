// Subscriber.js
export class Subscriber {
  constructor(name) {
    this.name = name;
  }

  // Menerima notifikasi dari publisher
  update(data) {
    console.log(`[${this.name}] menerima update data: ${data}`);
  }
}