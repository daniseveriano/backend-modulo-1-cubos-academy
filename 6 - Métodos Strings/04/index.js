let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function formatarId(identificador) {
    console.log(identificador.padStart(6, 0));
}

formatarId(identificador);

function formatarNome(nome) {
    let nomeFormatado = nome.split(" ");
    let arrayIniciaisMaiusculas = [];
    for (let item of nomeFormatado) {
        arrayIniciaisMaiusculas += item[0].toUpperCase() + item.slice(1) + " ";
    }
    console.log(arrayIniciaisMaiusculas.trim());
}

formatarNome(nome);

function formatarEmail(email) {
    console.log(email.trim());
}

formatarEmail(email);