const nomeArquivo = 'Foto da Familia.pdf';

function formatosPermitidos(formato) {
    if (formato.includes(".jpg") || formato.includes(".jpeg") || formato.includes(".gif") || formato.includes(".png")) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

formatosPermitidos(nomeArquivo);