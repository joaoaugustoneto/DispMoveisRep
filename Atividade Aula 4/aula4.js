/*
================================================================================================
BLOCO 1 - CALLBACKS
================================================================================================
*/ 

//1- 

function saudarComCallback(nome, callback) {
    const saudacao = (nome) => `Olá, ${nome}!`;
    const time = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        callback(saudacao(nome));
    }, time);
}

saudarComCallback("João", (mensagem) => {
    console.log(mensagem);
});

console.log(`Mensagem enviada! em ${time}ms`);

//2- 

function callbackHell() {
    setTimeout(() => {
        console.log("1. Usuário encontrado!");
        setTimeout(() => {
            console.log("2. Pedidos encontrados!");
            setTimeout(() => {
                console.log("3. Pagamento processado!");
            }, 500);
        }, 500);
    }, 500);
}

callbackHell();

//3-

/*
================================================================================================

O principal problema do exercício anterior é que o código é que fica cada vez mais difícil de ler e manter, pois a cada nova operação assíncrona, o código se torna mais aninhado e complexo. Por conta do "callback hell" ou "pyramid of doom".

================================================================================================
*/

/*
================================================================================================
BLOCO 2 - PROMISES
================================================================================================
*/ 

//-1 

const promessaSimples = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Sucesso!!");
  }, 1000);
});

promessaSimples
  .then((res) => console.log("Then:", res))
  .catch((err) => console.error("Catch:", err))
  .finally(() => console.log("Finally: Processo finalizado."));

// 3-

function verificarNumero(numero) {
  return new Promise((resolve, reject) => {
    if (numero >= 0) {
      resolve(`Número ${numero} é positivo. `);
    } else {
      reject(`Número ${numero} é negativo!`);
    }
  });
}

verificarNumero(10)
  .then((res) => console.log("Resolve:", res))
  .catch((err) => console.error("Reject:", err));

verificarNumero(-5)
  .then((res) => console.log("Resolve:", res))
  .catch((err) => console.error("Reject:", err));

/*
================================================================================================
BLOCO 3 - ASYNC/AWAIT
================================================================================================
*/

//1-
async function testarVerificacao(numero) {
  try {
    const resultado = await verificarNumero(numero);
    console.log("Async OK:", resultado);
  } catch (erro) {
    console.error("Async Erro:", erro);
  }
}

testarVerificacao(15);
testarVerificacao(-8);

//2-
async function buscarDadosSimulados() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nome: "Carlos", nota: "A+" });
    }, 1000);
  });
}

//3-
async function buscarPedidosDoUsuario(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 101, item: "Smartphone", status: "Processando..." }]);
    }, 1000);
  });
}

async function executarFluxoSequencial() {
  try {
    const usuario = await buscarDadosSimulados();
    console.log("Usuário carregado:", usuario);

    const pedidos = await buscarPedidosDoUsuario(usuario.id);
    console.log("Pedidos carregados:", pedidos);
  } catch (erro) {
    console.error("Erro no fluxo:", erro);
  }
}

executarFluxoSequencial();

/*
================================================================================================
BLOCO 4 - APLICAÇÃO PRÁTICA
================================================================================================
*/

//1-  