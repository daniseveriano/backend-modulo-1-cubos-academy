const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const listaDeAulas = [
    {
        id: 1,
        nomeDaAula: "Introdução a programação"
    },
    {
        id: 2,
        nomeDaAula: "Variáveis"
    },
    {
        id: 3,
        nomeDaAula: "Condicionais"
    },
    {
        id: 4,
        nomeDaAula: "Arrays"
    }
];

curso.aulas = listaDeAulas;

console.log(curso);