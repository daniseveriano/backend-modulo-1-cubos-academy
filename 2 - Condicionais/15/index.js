const primeiroNome = "";
const sobrenome = "";
const apelido = "";

if (!primeiroNome && !sobrenome && !apelido) {
    console.log("Digite pelo menos um nome, e/ou sobrenome, e/ou apelido!");
} else if (primeiroNome + sobrenome + apelido) {
    console.log(primeiroNome + " " + sobrenome + " " + apelido);
} else if (primeiroNome + sobrenome + !apelido) {
    console.log(primeiroNome + sobrenome);
} else if (!primeiroNome + sobrenome + apelido) {
    console.log(sobrenome + apelido);
} else if (primeiroNome + !sobrenome + apelido) {
    console.log(primeiroNome + apelido);
} else if (primeiroNome + !sobrenome + !apelido) {
    console.log(primeiroNome);
} else if (!primeiroNome + sobrenome + !apelido) {
    console.log(sobrenome);
} else if (!primeiroNome + !sobrenome + apelido) {
    console.log(apelido);
}