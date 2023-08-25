const nomes = ["Ana", "Joana", "Carlos", "amanda", "Amora", "ana"];
let apenasA = [];

for (let item of nomes) {
    if (item[0] === "A" || item[0] === "a") {
        apenasA.push(item)
        
    }
} 

console.log(apenasA)
