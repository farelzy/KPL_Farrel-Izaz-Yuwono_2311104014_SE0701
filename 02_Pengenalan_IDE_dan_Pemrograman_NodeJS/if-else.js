const a = 10
const b = 6
const c = 7

if (a > b) {
    console.log("a is greater than b")
}

if (a % 2 == 0) {
    console.log("habis di bagi 2")
} else if (b % 2 == 0) {
    console.log("b habis di bagi 2")
} else if (c % 2 == 0) {
    console.log("c habis di bagi 2")
} else {
    console.log("tidak ada yang habis di bagi 2")
}



let pilih = 2

switch (pilih) {
    case 1:
        console.log("anda memilih 1")
        break;
    case 2:
        console.log("anda memilih 2")
        break;
    case 3:
        console.log("anda memilih 3")
        break;
    default:
        console.log("anda tidak memilih 1, 2, atau 3")
}