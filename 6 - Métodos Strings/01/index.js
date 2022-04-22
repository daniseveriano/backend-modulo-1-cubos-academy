const comentario = "Essa covid é muito perigoso!";

function bloquearComentario(comentario) {
    if (comentario.includes("COVID") || comentario.includes("Covid") || comentario.includes("covid") || comentario.includes("PANDEMIA") || comentario.includes("Pandemia") || comentario.includes("pandemia")) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

bloquearComentario(comentario);