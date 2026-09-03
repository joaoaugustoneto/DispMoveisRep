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


// JEITO DO PROFESSOR

function saudarComCallback(nome, callback) {
    const saudacao = (nome) => `Olá, ${nome}!`;
    callback(saudacao(nome));
} 

saudarComCallback("Maria", (mensagem) => {
    console.log(mensagem);
}); 


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

//JEITO DO PROFESSOR
function buscarUsuario(callback) {
    setTimeout(() => callback("Usuário encontrado!"), 500);
};

function buscarPedidos(usuario, callback) {
    setTimeout(() => callback(["Pedido 1", "Pedido 2"]), 500);
};

function buscartPagamento(pedidos, callback) {
    setTimeout(() => callback("Pagamento processado!"), 500);
};

buscarUsuario((usuario) => {
  buscarPedidos(usuario, (pedidos) => {
    buscartPagamento(pedidos, (pagamento) => {
      console.log(pagamento);
    });
  });
});

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

//1 e 2-

const promessaSimples = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Sucesso!!");
  }, 1000);
});

promessaSimples
  .then((res) => console.log("Then:", res))
  .catch((err) => console.error("Catch:", err))
  .finally(() => console.log("Finally: Processo finalizado."));

//JEITO DO PROFESSOR

const minhaPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Sucesso!!");
  }, 1000);
});

// 2- JEITO DO PROFESSOR

minhaPromise
  .then((resultado) => {
    console.log("Deu certo:", resultado);
  })
  .catch((erro) => {
    console.log("Deu errado:", erro);
  })
  .finally(() => {
    console.log("Finalizou, deu certo ou errado.");
  });

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


//JEITO DO PROFESSOR

function verificarNumero(numero) {  
    return new Promise((resolve, reject) => {
        if (numero < 0) {
            reject(`Número ${numero} é negativo.`);
        } else {
            resolve(`Número ${numero} é positivo!`);
        }
    });
}

verificarNumero(5)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro));
    
verificarNumero(-15)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro));

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

//JEITO DO PROFESSOR

async function testarNumero (numero) {
    try {
        const msg = await verificarNumero(numero);
        console.log(msg);
    } catch (erro) {
        console.error(erro);
    }
}

testarNumero(-3);
testarNumero(5);

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

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function executarLoopComDelay() {
  for (let i = 1; i <= 3; i++) {
    await delay(500);
    console.log(`Iteração ${i} concluída. Flamengo é o melhor!`);
  }
}

executarLoopComDelay();

// 2-
async function operacaoInstavel() {
  return new Promise((resolve, reject) => {
    const falhou = Math.random() < 0.5;
    if (falhou) {
      reject("Falha na conexão com o servidor. Flamengo é o melhor!");
    } else {
      resolve("Dados carregados com sucesso! Flamengo é o melhor!");
    }
  });
}

async function executarOperacaoInstavel() {
  try {
    const resultado = await operacaoInstavel();
    console.log(resultado);
  } catch (erro) {
    console.log("Aviso amigável:", erro);
  }
}

executarOperacaoInstavel();

// 3-
async function validarCarrinho(carrinho) {
  await delay(300);
  if (!carrinho || carrinho.length === 0) {
    throw new Error("O carrinho está vazio. Flamengo é o melhor!");
  }
  return true;
}

async function calcularTotal(carrinho) {
  await delay(300);
  return carrinho.reduce((acc, item) => acc + item.preco, 0);
}

async function confirmarPagamento(total) {
  await delay(300);
  return `Pagamento de R$${total} confirmado. Flamengo é o melhor!`;
}

async function realizarCheckout(carrinho) {
  try {
    await validarCarrinho(carrinho);
    const total = await calcularTotal(carrinho);
    const confirmacao = await confirmarPagamento(total);
    console.log("Checkout finalizado com sucesso:", confirmacao);
  } catch (erro) {
    console.error("Falha ao realizar checkout:", erro.message);
  }
}

realizarCheckout([{ item: "Camiseta", preco: 100 }]);
realizarCheckout([]);