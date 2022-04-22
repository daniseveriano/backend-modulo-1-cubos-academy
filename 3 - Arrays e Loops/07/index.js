const nomes = ["Ana", "Joana", "Carlos", "amanda", "Ana Clara"];
let nomesQueComecamComA = [];

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === "A" || nomes[i][0] === "a") {
        nomesQueComecamComA.push(nomes[i]);
    }
}

console.log(nomesQueComecamComA);