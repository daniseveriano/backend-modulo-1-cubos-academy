const numeroCartao = '1111222233334444';

function formatarNumCartao(numero) {
    let arrayCartao = numeroCartao.split("");
    arrayCartao.splice(4, 8, "********");
    console.log(arrayCartao.join(""));
}

formatarNumCartao(numeroCartao);