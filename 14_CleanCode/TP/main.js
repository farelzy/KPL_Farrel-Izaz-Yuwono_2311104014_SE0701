import { Publisher } from './Publisher.js';
import { Subscriber } from './Subscriber.js';

const publisher = new Publisher();

const subscriberOne = new Subscriber("Satu");
const subscriberTwo = new Subscriber("Dua");

// Mendaftarkan subscriber ke publisher
publisher.subscribe(subscriberOne);
publisher.subscribe(subscriberTwo);

// Mengirim update pertama
publisher.setData("Update pertama");
// Output:
// [Satu] menerima update data: Update pertama
// [Dua] menerima update data: Update pertama

// Mengirim update kedua
publisher.setData("Update kedua");
// Output:
// [Satu] menerima update data: Update kedua
// [Dua] menerima update data: Update kedua