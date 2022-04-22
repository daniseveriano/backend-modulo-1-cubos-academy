let capital = 1000;
let tempo = 5; //Tempo Expresso em Meses
let juros = 12.5; //Taxa de Juros da Aplicação

console.log(`O Valor do Montante será de R$ ${(capital * Math.pow(1 + (juros / 100), tempo)).toFixed(2)}`);