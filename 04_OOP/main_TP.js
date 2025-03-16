import KodePos from "./KodePos.js";
import DoorMachine from "./DoorMachine.js";

const kodePos = new KodePos();
console.log("Kode Pos Batununggal:", kodePos.getKodePos("Batununggal"));
console.log("Kode Pos Wates:", kodePos.getKodePos("Wates"));
console.log("Kode Pos Tidak Ada:", kodePos.getKodePos("TidakAda"));

const door = new DoorMachine();
door.toggle();
door.toggle();