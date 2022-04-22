const numeros = [3, 24, 1, 8, 11, 7, 15];
let maiorNumero = [];

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1] && numeros[i] > maiorNumero) {
        maiorNumero.pop();
        maiorNumero.push(numeros[i]);
    }
}

console.log(maiorNumero);