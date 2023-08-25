const filaDeDentro = ["Jose", "Maria"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteDePessoas = 5;

while (filaDeDentro.length < limiteDePessoas) {
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()
    filaDeDentro.length + 1
}
console.log(filaDeDentro);
