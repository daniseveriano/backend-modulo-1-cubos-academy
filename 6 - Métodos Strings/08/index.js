const cpf = "21.200.400/0001-22";

function formatar(numero) {
    if (numero.length === 14) {
        let cpfFormat = numero.replace("-", ".");
        let arrayCpf = cpfFormat.split(".");
        console.log(arrayCpf.join(""));
    } else if (numero.length === 18) {
        console.log(numero.slice(0, 2) + numero.slice(3, 6) + numero.slice(7, 10) + numero.slice(11, 15) + numero.slice(16));
    }
}

formatar(cpf);

// Crie uma função que receba um número de CPF ou CNPJ e remova toda pontuação. A função deverá imprimir o resultado.

// ```javascript=
// const cpf = "011.022.033-44";
// ```

// Para o exemplo acima deverá imprimir:

// ```
// 01102203344
// ```

// Faça o teste com outros exemplos.