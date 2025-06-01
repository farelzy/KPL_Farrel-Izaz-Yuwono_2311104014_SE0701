export class Publisher {
    constructor() {
        this.subscribers = [];
        this.data = null;
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    setData(newData) {
        this.data = newData;
        this.notify();
    }

    notify() {
        this.subscribers.forEach(sub => sub.update(this.data));
    }
}