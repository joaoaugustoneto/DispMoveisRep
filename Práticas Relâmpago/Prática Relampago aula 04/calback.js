const saudacao = (nome) => `Olá, ${nome}!`;

function saudar(nome, callback) {
    callback(saudacao(nome));
}

saudar('João', (resultado) => {
    console.log(resultado);
});


/*=============================================================================================*/

function saudar(nome, callback) {
    const saudacao = (nome) => `Olá, ${nome}!`;
    setTimeout(() => {
        callback(saudacao(nome));
    }, 2000);
}

saudar('João', (resultado) => {
    console.log(resultado);
});

