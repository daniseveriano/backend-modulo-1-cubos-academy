const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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
]

function encontrarDono(pet, usuarios) {
    let mensagem = "";
    for (let nome of usuarios) {
        if (nome.pets.includes(pet)) {
            mensagem = `O dono(a) do(a) ${pet} é o(a) ${nome.nome}.`;
            break;
        } else {
            mensagem = `Que pena ${pet}, não encontramos seu dono(a)`;
        }
    }
    console.log(mensagem);
}

encontrarDono("Pitchula", usuarios);