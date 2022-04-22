function corrigirProva(prova) {
    let acertos = 0;
    for (let item of prova.questoes) {
        if (item.resposta === item.correta) {
            acertos += 1;
        }
    }
    return `O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve 
    nota ${acertos * 2}`;
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

console.log(corrigirProva(prova));
