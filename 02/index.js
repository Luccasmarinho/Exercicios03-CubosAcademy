const letras = ["A", "a", "B", "C", "e", "e", "e", "E", "E"];

let somaLetras = 0;

for (let temLetra of letras) {
    if (temLetra === "E" || temLetra === "e") {
        somaLetras += 1;
    }  
}

if (somaLetras >= 1) {
    console.log(`Foram encontradas ${somaLetras} Letras E ou e`);
} else {
    console.log("Nenhuma letra E ou e foi encontrada");
}


