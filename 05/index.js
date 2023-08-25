
const original = [10, 24, 22, 88, 113, 114, 111];

let novoArray = [];

for (let pares of original) {
    if (pares % 2 === 0) {
        novoArray.push(pares)
    }
}

console.log(novoArray);

//forma com o while
/*
let i = 0;
let novoArray = [];

while (i < original.length) {
    if (original[i] % 2 === 0) {
        novoArray.push(original[i])
    }
    i += 1
}

console.log(novoArray);
*/

