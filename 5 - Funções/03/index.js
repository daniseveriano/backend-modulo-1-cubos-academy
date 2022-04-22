const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        },
    ],
    calcularTotalDeItens: function () {
        let somaQtd = 0;//guarda qtd total de produtos
        for (let item of this.produtos) {
            somaQtd += item.qtd; //qtd de produtos por item
        }
        return somaQtd;
    },
    calcularTotalAPagar: function () {
        let somaProdutos = 0; //guarda valor total de produtos
        for (let item of this.produtos) {
            somaProdutos += (item.qtd * item.precoUnit); //total por produto
        }
        return somaProdutos / 100;
    },
    calcularDesconto: function () {
        let desconto1 = 999999999999999999;
        let desconto2 = 0;
        if (this.calcularTotalDeItens() >= 4) {
            for (let item of this.produtos) {
                if (item.precoUnit < desconto1) {
                    desconto1 = (item.precoUnit / 100).toFixed(2);
                }
            }
        }
        if (this.calcularTotalAPagar() > 100) {
            desconto2 = (this.calcularTotalAPagar() * 0.1).toFixed(2);
        }
        if (desconto1 > desconto2) {
            console.log(desconto1);
        } else if (desconto2 > desconto1) {
            console.log(desconto2);
        } else if (this.calcularTotalDeItens() < 4 && this.calcularTotalAPagar() < 100) {
            console.log(0);
        }
    },
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
        `);
        console.log(this.imprimirDetalhes());
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens
        Total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)}`
        );
    },
    imprimirDetalhes: function () {
        for (let item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${((item.qtd * item.precoUnit) / 100).toFixed(2)}`);
        }
    },
    addProduto: function (produto) {
        for (let item of this.produtos)
            if (produto.id == item.id) {
                this.produtos.qtd += produto.qtd;
            } else if (produto.id != item.id) {
                this.produtos.push(produto);
                break;
            }
    }
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);

carrinho.calcularDesconto();