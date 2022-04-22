const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

let soma = 0;

for (let nome of usuarios) {
    soma = 0;

    for (let item of nome.pets) {
        soma++;
    }
    let finalMensagem = (soma > 1 ? `pets.` : `pet.`);
    let inicioMensagem = (soma > 0 ? `tenho ${soma} ` + finalMensagem : `não tenho pets.`);

    console.log(`Sou ${nome.nome} e ` + inicioMensagem);
}