const letras = ["A", "a", "B", "C", "E", "e"];

let soma = 0;

for (let item of letras) {
    if (item === "E" || item === "e") {
        soma++;
    }
}

if (soma > 0) {
    console.log(`Foram encontradas ${soma} letras "E" ou "e"`);
} else {
    console.log('Nenhuma letra "E" ou "e" foi encontrada');
}
