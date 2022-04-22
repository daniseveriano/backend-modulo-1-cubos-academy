const jogada1 = "pedra";
const jogada2 = "tesoura";

//ganha pedra = quando o outro jogador joga tesoura
//ganha tesoura = quando o outro jogador joga papel
//ganha papel = quando o outro jogador joga pedra

if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "pedra")) {
    console.log(`Jogada vencedora: Pedra`);
} else if ((jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "tesoura")) {
    console.log(`Jogada vencedora: Tesoura`);
} else if ((jogada1 === "papel" && jogada2 === "pedra") || (jogada1 === "pedra" && jogada2 === "papel")) {
    console.log(`Jogada vencedora: Papel`);
} else if (jogada1 === jogada2) {
    console.log(`Empate!`);
} else {
    console.log(`Jogada Inválida!`);
}