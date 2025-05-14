const array = Array.from({ length: 50 }, (_, index) => index);

array.forEach(index => {
    if (index % 2 === 0 && index % 3 === 0) {
        console.log(`${index}  #$#$`);
    } else if (index % 2 === 0) {
        console.log(`${index}  ##`);
    } else if (index % 3 === 0) {
        console.log(`${index}  $$`);
    } else {
        console.log(index);
    }
});