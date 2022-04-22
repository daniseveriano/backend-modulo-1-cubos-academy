const numeros = [54, 22, 14, 87, 20, 50];

let posicao = 0;

for (let item of numeros) {
    if (item !== 10) {
        posicao++;
    } else if (item === 10) {
        console.log(posicao);
        break;
    }
}

if (posicao >= numeros.length) {
    console.log(-1);
}

