const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }


//a. Adicione uma tv, dois cabos usb e uma webcam para o José

const carrinhoJose = [tv, caboUsb, caboUsb, webcam];

for (let item of carrinhoJose) {
    if (jose.carrinho.includes(item)) {
        item.quantidade = 1;
        item.quantidade += 1;
    } else {
        jose.carrinho.push(item);
        item.quantidade = 1;
    }
}

// console.log(jose);

//b. Adicione dois notebooks para o Carlos

const carrinhoCarlos = [notebook, notebook];

for (let item of carrinhoCarlos) {
    if (carlos.carrinho.includes(item)) {
        item.quantidade = 1;
        item.quantidade += 1;
    } else {
        carlos.carrinho.push(item);
        item.quantidade = 1;
    }
}

// console.log(carlos);

//c. Adicione um teclado, dois cabos usb, um carregador, um mouse e
//um monitor para a Patricia

const carrinhoPatricia = [teclado, caboUsb, caboUsb, carregador, mouse, monitor];

for (let item of carrinhoPatricia) {
    if (patricia.carrinho.includes(item)) {
        item.quantidade = 1;
        item.quantidade += 1;
    } else {
        patricia.carrinho.push(item);
        item.quantidade = 1;
    }
}

// console.log(patricia);

//d. Adicione cinco webcams para o Renato

const carrinhoRenato = [webcam, webcam, webcam, webcam, webcam];

for (let item of carrinhoRenato) {
    if (renato.carrinho.includes(item)) {
        item.quantidade += 1;
    } else {
        renato.carrinho.push(item);
        item.quantidade + 1;
    }
}

// console.log(renato);

//e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto

const carrinhoRoberto = [webcam, caboUsb, caboUsb, monitor];

for (let item of carrinhoRoberto) {
    if (roberto.carrinho.includes(item)) {
        item.quantidade = 1;
        item.quantidade += 1;
    } else {
        roberto.carrinho.push(item);
        item.quantidade = 1;
    }
}

// console.log(roberto);