let montante = 90000;
let capital = 60000;
let periodo = 24;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${(((Math.pow((montante / capital), (1 / periodo))) - 1) * 100).toFixed(2)}%, pois após ${periodo} meses você teve que pagar ${montante} reais.`);