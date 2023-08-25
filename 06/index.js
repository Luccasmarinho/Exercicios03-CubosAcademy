const numeros = [7, 1, 2, 5, 10, 6, 4, 8, 2];

let somaDosPares = 0;

for (let item of numeros) {
    if (item % 2 === 0) {
        somaDosPares += item
    }
}

console.log(`Soma dos números pares: ${somaDosPares}`);

