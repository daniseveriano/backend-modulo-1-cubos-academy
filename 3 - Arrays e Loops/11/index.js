const original = [5, 7, 13, 17, 26, 34, 118, 245];
let resultado = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] >= 10 && original[i] <= 20 || original[i] > 100) {
        resultado.push(original[i]);
    }
}

console.log(resultado);

//Declare um array contendo alguns números quaisquer.
//Depois crie um novo array que contenha apenas os números do array
//original que estejam entre 10 e 20 ou que sejam maiores que 100.
//Ao final, imprima a variável que guarda o novo array.

//Para o array **original** acima:

//Deverá ser impresso no console:
//[13, 17, 118, 245]

