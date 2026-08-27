function comTimeout(promise, ms) {
    const limite = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Tempo esgotado!")), ms) 
    );
    return Promise.race([promise, limite]);
}

function operacaoLenta() {
    return new Promise((resolve) =>
    setTimeout(() => resolve("Finished!"), 3000)
    );
}

comTimeout(operacaoLenta(), 1000)
    .then((r) => console.log(r))
    .catch((e) => console.error(e.message))
