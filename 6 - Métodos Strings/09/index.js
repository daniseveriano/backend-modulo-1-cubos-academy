const nome = 'Dani Severiano';

function geradorNickname(nome) {
    let nomeFormat = (nome.toLowerCase()).replace(" ", "");
    console.log("@" + nomeFormat.slice(0, 12));
}

geradorNickname(nome);