const numeros = [8, 11, 4, 6, 12, 9, 2, ];

let numeroMaior = numeros[0];
let numeroMenor = numeros[0];


for (let item of numeros) {
    if (item > numeroMaior) {
        numeroMaior = item
    }
}

for (let item of numeros) {
    if (item < numeroMenor) {
        numeroMenor = item
    }
}

const resultado = numeroMaior - numeroMenor;
console.log(`O resultado é: ${resultado}, pois a maior diferença é ${numeroMaior} - ${numeroMenor}`)
