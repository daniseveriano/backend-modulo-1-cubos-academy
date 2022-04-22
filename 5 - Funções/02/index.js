const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            let statusCarro = (this.ligado ? "Ligado" : "Desligado");
            console.log(`Carro ${statusCarro}. Velocidade: ${this.velocidade}.`);
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            let statusCarro = (this.ligado ? "Ligado" : "Desligado");
            console.log(`Carro ${statusCarro}. Velocidade: ${this.velocidade}.`);
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.velocidade += 10;
            let statusCarro = (carro.ligado ? "Ligado" : "Desligado");
            console.log(`Carro ${statusCarro}. Velocidade: ${this.velocidade}.`);
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
            let statusCarro = (carro.ligado ? "Ligado" : "Desligado");
            console.log(`Carro ${statusCarro}. Velocidade: ${this.velocidade}.`);
        }
    }
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();

//1. Desligar o carro - Este carro já está desligado. OK
//2. Ligar o carro - Carro ligado. Velocidade: 0. OK
//3. Ligar o carro - Este carro já está ligado. OK
//4. Acelerar o carro - Carro ligado. Velocidade: 10. OK
//5. Acelerar o carro - Carro ligado. Velocidade: 20. OK
//6. Desacelerar o carro - Carro ligado. Velocidade: 10. OK
//7. Desligar o carro - Carro desligado. Velocidade: 0. OK
//8. Acelerar o carro - Não é possível acelerar um carro desligado. OK
//9. Desacelerar o carro - Não é possível desacelerar um carro desligado. OK









