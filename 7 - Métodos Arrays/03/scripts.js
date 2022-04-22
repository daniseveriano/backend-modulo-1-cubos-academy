const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontrarCarro(nomes, posicao) {
    let carrosEncontrados = nomes.slice(posicao, posicao + 3);
    console.log(carrosEncontrados.join(" - "));
}

encontrarCarro(nomes, posicao);