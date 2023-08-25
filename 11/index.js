const original = [5, 7, 13, 17, 26, 34, 118, 245, 30, 20, 100, 99];

let novoArray = [];

for (let item of original) {
    if (item >= 10 && item <= 20 || item > 100) {
        novoArray.push(item)
    }
}
console.log(novoArray);

//Declare um array contendo alguns números quaisquer.

//Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20, incluindo //esses números, ou que sejam maiores que 100. Ao final, imprima a variável que guarda o novo array.