const celular = 99918888;

function formatarCel(celular) {
    let arrayCelular = String(celular).split("");

    if (arrayCelular.length === 10) {
        console.log("(" + arrayCelular.slice(0, 2).join("") + ") " + "9 " + arrayCelular.slice(2, 6).join("") + "-" + arrayCelular.slice(6).join(""));
    } else if (arrayCelular.length === 8) {
        console.log("9 " + arrayCelular.slice(0, 4).join("") + "-" + arrayCelular.slice(4).join(""));
    }
}

formatarCel(celular);