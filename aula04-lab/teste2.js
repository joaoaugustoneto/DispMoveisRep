function dividir(a, b, callback) {
    if (b === 0) {
        callback(new Error("Divisão por zero não é permitida"));
    return;
    }
    callback(null, a / b);
}

dividir(10, 2, (erro, resultado) => {
    if (erro) return console.error("Erro: ",  erro.message);
    console.log("Resultado: ", resultado);
});

dividir(10, 0, (erro, resultado) => {
    if (erro) return console.error("Erro: ",  erro.message);
    console.log("Resultado: ", resultado);
});