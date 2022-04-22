let pInicial = 1000; //Quantidade inicial de pessoas infectadas
let x = 4; //Quantidade de pessoas para as quais um paciente infectado pode transmitir
let t = 100; //Tempo em dias

let expoente = t / 7;
console.log(`Pessoas Infectadas: ${(pInicial * (Math.pow(x, expoente))).toFixed(0)}`);