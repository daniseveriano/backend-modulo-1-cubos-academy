const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function formatar(frutas) {
    let frutasFormat = frutas.reverse();
    console.log(frutasFormat.join(", "));
}

formatar(frutas);