const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

//FOR OF
for (let item of original) {
    const resto = item % 2;
    if (resto === 0) {
        pares.push(item);
    } else {
        impares.push(item);
    }
}

//FOR
//for (i = 0; i < original.length; i++) {
//    if (original[i] % 2 === 0) {
//        pares.push(original[i]);
//    } else {
//        impares.push(original[i]);
//    }
//}

//WHILE
//let indice = 0;

//while (indice < original.length) {
//    if (original[indice] % 2 === 0) {
//        pares.push(original[indice]);
//    } else {
//        impares.push(original[indice]);
//   }
//   indice++
//}

console.log(pares);
console.log(impares);