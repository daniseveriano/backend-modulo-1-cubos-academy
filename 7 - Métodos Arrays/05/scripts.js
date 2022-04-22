const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(fila, paciente) {
    let posicao = fila.indexOf(paciente);
    fila.splice(posicao, 1);
    fila.push(paciente);
    console.log(fila.join(", "));
}

function atenderPaciente(fila, paciente) {
    let posicao = fila.indexOf(paciente);
    fila.splice(posicao, 1);
    console.log(fila.join(", "));
}

function cancelarPaciente(fila, paciente) {
    let posicao = fila.indexOf(paciente);
    fila.splice(posicao, 1);
    console.log(fila.join(", "));
}

agendarPaciente(pacientes, "Bárbara");
agendarPaciente(pacientes, "Maria");
atenderPaciente(pacientes, "João");
cancelarPaciente(pacientes, "Ana");