// named function
function perkalian(a, b){
    let hasil = a*b
    return hasil
}

// arrow func
// Expression func
const penjumlahan = (a, b) => {
    let hasil = a+b
    return hasil
}

// named Expression func
const pembagian = function bagi(a, b){
    let hasil = a/b
    return hasil
}

console.log(`hasil perkalian ${perkalian (5, 2)}`)
console.log(`hasil penjumlahan ${penjumlahan (5, 2)}`)
console.log(`hasil pembagian ${pembagian (5, 2)}`)