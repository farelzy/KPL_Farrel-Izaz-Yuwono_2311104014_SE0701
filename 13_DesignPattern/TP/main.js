import { Publisher } from "./Publisher.js";
import { Subscriber } from "./Subscriber.js";

const publisher = new Publisher();

const sub1 = new Subscriber("Satu");
const sub2 = new Subscriber("Dua");

publisher.subscribe(sub1);
publisher.subscribe(sub2);

publisher.setData("Update pertama");
// Output:
// [Satu] menerima update data: Update pertama
// [Dua] menerima update data: Update pertama

publisher.setData("Update kedua");
// Output:
// [Satu] menerima update data: Update kedua
// [Dua] menerima update data: Update kedua