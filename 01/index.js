const numeros = [2, 3, 4, 6, 10, 20];

let i = 0;
let soma = 0;

while (i < numeros.length) {
    soma += numeros[i];
    i += 1;
}

console.log(`A soma é: ${soma}`);