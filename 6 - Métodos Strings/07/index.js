const email = "aluno@cubos.academy";

function validarEmail(email) {
    if (email[0] !== "." && email[email.length - 1] !== "." && email.includes("@") && email.includes(".")) {
        console.log("E-mail válido");
    } else {
        console.log("E-mail inválido");
    }
}

validarEmail(email);