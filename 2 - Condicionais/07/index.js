const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30000; //em Reais

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (!aposentada || !portadoraDeDoenca) {
    if (totalDeRendimentos > 28559.70) {
        console.log("PEGA LEAO");
    } else {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE!");
    }
}