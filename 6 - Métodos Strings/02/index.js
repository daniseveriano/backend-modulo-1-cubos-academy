const cpf = "12345678900";
const cnpj = "12345678900";

function formatarCpf(numeros) {
    if (numeros.length === 11) {
        let parte1 = numeros.slice(0, 3);
        let parte2 = numeros.slice(3, 6);
        let parte3 = numeros.slice(6, 9);
        let parte4 = numeros.slice(9, 11);
        console.log(parte1 + parte2.padStart(4, ".") + parte3.padStart(4, ".") + parte4.padStart(3, "-"));
    } else {
        console.log("CPF Inválido");
    }
}

function formatarCnpj(numeros) {
    if (numeros.length === 14) {
        let parte1 = numeros.slice(0, 2);
        let parte2 = numeros.slice(2, 5);
        let parte3 = numeros.slice(5, 8);
        let parte4 = numeros.slice(8, 12);
        let parte5 = numeros.slice(12, 14);
        console.log(parte1 + parte2.padStart(4, ".") + parte3.padStart(4, ".") + parte4.padStart(5, "/") + parte5.padStart(3, "-"));
    } else {
        console.log("CNPJ Inválido");
    }
}

// 12.345.678/0001-99

formatarCpf(cpf);

// Faça um sistema que consiga validar CPF ou CNPJ e exibir formatado
//  de acordo com os padrões abaixo. Assuma que todos os dígitos que
//   chegam para validação são numéricos:

// **a)** Formatar CPF

// -   Validar o tamanho (11 números)
// -   Imprimir o CPF formatado se for válido

// Exemplo 1:

// ```javascript=
// const cpf = "12309";
// ```

// Para o exemplo acima o sistema deverá imprimir:

// ```
// CPF Inválido
// ```

// Exemplo 2:

// ```javascript=
// const cpf = "12345678900";
// ```

// Para o exemplo acima o sistema deverá imprimir:

// ```
// 123.456.789-00
// ```

// **b)** Formatar CNPJ

// -   Validar o tamanho (14 números)
// -   Imprimir o CNPJ formatado se for válido

// Exemplo 1:

// ```javascript=
// const cnpj = "12345678900";
// ```

// Para o exemplo acima o sistema deverá imprimir:

// ```
// CNPJ Inválido
// ```

// Exemplo 2:

// ```javascript=
// const cnpj = "12345678000199";
// ```

// Para o exemplo acima o sistema deverá imprimir:

// ```
// 12.345.678/0001-99
// ```

// Faça o teste com outros exemplos.

// Faça commit do resultado.