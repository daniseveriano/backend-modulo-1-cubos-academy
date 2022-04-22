const texto = "Aprenda programar do zero na Cubos Academy";

function urlAmigavel(texto) {
    let textoMinusculo = texto.toLowerCase();
    let urlAmigavel = (textoMinusculo.split(" ")).join("-");
    console.log(urlAmigavel);
}

urlAmigavel(texto);