const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function ordemDeAtendimento(fila, operacao, paciente) {
    let posicao = fila.indexOf(paciente);
    if (operacao === "atender") {
        fila.splice(posicao, 1);
    } else if (operacao === "agendar") {
        fila.splice(posicao, 1);
        fila.push(paciente);
    }
    console.log(fila.join(", "));
}

ordemDeAtendimento(pacientes, "agendar", "Bárbara");
ordemDeAtendimento(pacientes, "agendar", "Maria");
