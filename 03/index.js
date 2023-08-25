const numeros = [101, 12, 10, 102, 101, 284];

let i = 0;
let temNumeroDez = false;

while (i < numeros.length) {
    if (numeros[i] === 10) {
        temNumeroDez = true
        console.log(`Número 10 na posição ${i}`);
    }
    i += 1
}

if (!temNumeroDez) {
    console.log("-1")
}








