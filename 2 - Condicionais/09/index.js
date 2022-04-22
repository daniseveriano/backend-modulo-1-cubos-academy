const nota = 5;

//| Nota | Conceito |
//| 9 a 10 | A |
//| 8 a 8,9 | B |
//| 6 a 7,9 | C |
//| 4 a 5,9 | D |
//| menos que 4 | E |

//Mensagem padrão: `O estudando obteve conceito B`

if (nota >= 9) {
    console.log("O estudante obteve conceito A");
} else if (nota <= 8.9 && nota >= 8) {
    console.log("O estudante obteve conceito B");
} else if (nota <= 7.9 && nota >= 6) {
    console.log("O estudante obteve conceito C");
} else if (nota <= 5.9 && nota >= 4) {
    console.log("O estudante obteve conceito D");
} else {
    console.log("O estudante obteve conceito E");
}
