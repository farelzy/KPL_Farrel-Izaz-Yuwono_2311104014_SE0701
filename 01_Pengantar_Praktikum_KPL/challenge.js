import { userInfo } from "os";
import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


input.question("Siapa nama kamu, Masukan nama : ", (nama) => {
    userInfo.nama = nama;

    input.question("Jurusan kamu : ", (jurusan) => {
        userInfo.jurusan = jurusan;

        input.question("Universitas kamu : ", (universitas) => {
            userInfo.universitas = universitas;

            input.question("Umur kamu: ", (umur) => {
                userInfo.umur = umur;
                console.log("\n---DATA USER---")
                console.info(`Nama : ${nama}`)
                console.info(`Jurusan : ${jurusan}`)
                console.info(`Universitas : ${universitas}`)
                console.info(`Umur : ${umur}`)
                input.close();
            })
        })
    })
    
})