console.log("Testando Ambiente de Teste");

function buscarComAtraso(nome, callback) {
    const tempo = Math.floor (Math.random() * 2000);
    console.log(`Buscando ${nome} ... (${tempo}ms)`);
    setTimeout(() => callback(nome) , tempo);
}

buscarComAtraso("Ana", (nome) => {
    console.log(`Encontrado: ${nome} chegou!`);
});

buscarComAtraso("Bruno", (nome) => {
    console.log(`Encontrado: ${nome} chegou!`);
});