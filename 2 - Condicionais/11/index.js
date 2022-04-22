//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1900000;


if ((rendaMensalEmCentavos / 100) < 2000) {
    console.log("Não há parcelas a pagar neste mês porque sua renda mensal é menor que R$ 2.000,00.");
} else if (mesesDecorridos > 60) {
    console.log("Não há parcelas a pagar neste mês porque o prazo para pagamento de 60 meses (5 anos) se encerrou.");
} else if ((totalJaPagoPeloAluno / 100) > 18000) {
    console.log("Não há parcelas a pagar neste mês porque você já pagou o valor total do curso.");
} else {
    console.log(`O valor da parcela desse mês é R$ ${(rendaMensalEmCentavos / 100 * 0.18).toFixed(2)}`);
}