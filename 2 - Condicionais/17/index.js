//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

//Constantes para Ajuste
const parcelas = (quantidadeDoParcelamento - (valorPago / (valorDoProduto / quantidadeDoParcelamento))).toFixed(0);
const unidade = (parcelas === 1 ? "parcela" : "parcelas");
const verbo = (parcelas === 1 ? "Resta" : "Restam");

//Resolução
console.log(`${verbo} ${parcelas} ${unidade} de R$100`);