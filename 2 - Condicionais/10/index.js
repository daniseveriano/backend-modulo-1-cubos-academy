const caractere = "Z";

//| Vogal | A E I O U a e i o u|
//| Consoante | Qualquer letra que não seja uma vogal |
//| Número | 1 2 3 4 5 6 7 9 0 |

if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minúscula");
} else if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiúscula");
} else if (caractere >= 0 || caractere < 0) {
    console.log("Número");
} else {
    console.log("Consoante")
}