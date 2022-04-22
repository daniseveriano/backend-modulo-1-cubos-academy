//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$ ${((valorDoProduto / 100) - ((valorDoProduto / 100) * 0.05)).toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$ ${((valorDoProduto / 100) - ((valorDoProduto / 100) * 0.03)).toFixed(2)}`);
} else {
    console.log(`Valor a ser pago: R$ ${((valorDoProduto / 100) - ((valorDoProduto / 100) * 0.10)).toFixed(2)}`);
}