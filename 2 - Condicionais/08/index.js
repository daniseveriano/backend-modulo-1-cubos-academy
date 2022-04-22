const idade = 15;
const possuiPatologia = false;
const altura = 160;
const ehEstudante = false;

if (idade < 12 || idade > 65 || altura < 150 || possuiPatologia) {
    console.log("ACESSO NEGADO");
} else if (idade < 18 || ehEstudante) {
    console.log("10 Reais");
} else {
    console.log("20 reias");
}

//Não são permitidas pessoas:
//Menores de 12 anos
//Maiores de 65 anos
//Que possuam qualquer patologia cardíaca
//Menores de 150cm de altura

//10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
//20 reias, caso contrário

//ACESSO NEGADO caso a pessoa não possa brincar
//10 reais caso esse seja o valor que a pessoa deve pagar para brincar
//20 reais caso esse seja o valor que a pessoa deve pagar para brincar

