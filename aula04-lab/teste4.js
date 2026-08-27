function operacaoInstavel(){
    return new Promise((resolve, reject) => {
        const deuCerto = Math.random() > 0.7;
        setTimeout(() => {
            deuCerto ? resolve("Sucesso!") : reject("Falhou!");
        }, 300);
    });
}

async function comRetry(tentativas) {
    for (let i = 1; i <= tentativas; i++){
        try {
            const resultado = await operacaoInstavel();
            console.log(`Tentativa ${i}: ${resultado}`);
            return resultado;
        } catch (erro) {
            console.log(`Tentativa ${i}: ${erro}, tentando de novo...`);
        }
    }
    console.log("Desisti depois de", tentativas, "tentativas.");
}

comRetry(5);