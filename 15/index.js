const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16];
const pares = [];
const impares = [];

let i = 0;

//com while
while (i < original.length) {
    if (original[i] % 2 === 0) {
        pares.push(original[i])
    } else {
        impares.push(original[i])
    }
    i++
}
console.log(pares);
console.log(impares);


//com for tradicional
/*
for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        pares.push(original[i])
        posicao = i
    }
}
console.log(pares)
console.log(impares)
*/



//com for of
/*
for (let item of original) {
    if (item % 2 === 0) {
        pares.push(item)
    } else {
        impares.push(item)
    }
}
console.log(pares)
console.log(impares)
*/
