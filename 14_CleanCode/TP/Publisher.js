export class Publisher {
  constructor() {
    this.subscribers = [];
    this.data = null;
  }

  // Menambahkan subscriber
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  // Menghapus subscriber
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(s => s !== subscriber);
  }

  // Mengatur data dan memberi notifikasi ke semua subscriber
  setData(newData) {
    this.data = newData;
    this.notify();
  }

  // Memberi tahu semua subscriber
  notify() {
    this.subscribers.forEach(sub => sub.update(this.data));
  }
}