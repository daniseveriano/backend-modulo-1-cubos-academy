const alturaEmCm = 179;

//Menor que 180 = REPROVADO
//Entre 180 e 185 = LÍBERO
//Entre 186 e 195 = PONTEIRO
//Entre 196 e 205 = OPOSTO
//Mais de 205 = CENTRAL

if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("LÍBERO");
} else if (alturaEmCm > 185 && alturaEmCm <= 195) {
    console.log("PONTEIRO");
} else if (alturaEmCm > 195 && alturaEmCm <= 205) {
    console.log("OPOSTO");
} else if (alturaEmCm > 205) {
    console.log("CENTRAL");
} else {
    console.log("REPROVADO");
}
