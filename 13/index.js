const disjuntores = [true ,false, false, true, true, false, true, false, false, true];
let posicao = 0;

for (let i = 0; i < disjuntores.length; i += 1) {
    if (disjuntores[i]) {
        posicao = i
        console.log(posicao);
    }
}


