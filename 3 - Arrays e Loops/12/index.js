const filaDeDentro = ["Jose", "Maria", "Joao"]; //Maximo de 5 pessoas
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let item of filaDeDentro) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift();
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);