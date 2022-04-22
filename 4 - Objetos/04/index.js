const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

//Exemplo: usuarios[0].maior_idade = true;

for (let item of usuarios) {
    if (item.idade > 17) {
        item.maior_idade = true;
    } else {
        item.maior_idade = false;
    }
}

console.log(usuarios);