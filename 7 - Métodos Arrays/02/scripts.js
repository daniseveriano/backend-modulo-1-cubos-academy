function grupos(nomes, tamanho) {
    let grupo1 = [];
    let grupo2 = [];

    for (let nome of nomes) {
        if (grupo1.length < tamanho) {
            grupo1.push(nome);
        } else {
            grupo2.push(nome);
        }
    }
    console.log(`Grupo 1: ${grupo1.join(", ")}.`);
    console.log(`Grupo 2: ${grupo2.join(", ")}.`);
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

grupos(nomes, tamanhoDoGrupo);