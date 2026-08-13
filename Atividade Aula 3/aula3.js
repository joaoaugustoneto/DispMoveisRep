/* =====================================================================
   AULA 03 - JAVASCRIPT ES6+ (EXERCÍCIOS RESOLVIDOS E COMENTADOS)
   Prof. Ms.c. Bruno Assunção Dias
   ===================================================================== */


// =====================================================================
// BLOCO 1 DE 4: Template Literals & Destructuring
// =====================================================================

// --- EXERCÍCIO 1.1 ---
// Crie um objeto produto com nome, preco e estoque. Exiba uma frase usando template literal com 3 dados.
const produto = {
  nome: "Notebook",
  preco: 3500.00,
  estoque: 12,
};

// Usando Template Literal (`${...}`) para interpolar variáveis no texto
console.log(`--- BLOCO 1 - EX 1 ---`);
console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e possui ${produto.estoque} unidades em estoque.`);


// --- EXERCÍCIO 1.2 ---
// Use destructuring para extrair preco e estoque do objeto produto em uma única linha.
const { preco, estoque } = produto; // Destructuring de objeto

console.log(`\n--- BLOCO 1 - EX 2 ---`);
console.log(`Preço extraído: R$ ${preco} | Estoque extraído: ${estoque} unidades`);


// --- EXERCÍCIO 1.3 ---
// Crie um array com os nomes de 4 colegas. Use destructuring para pegar apenas o primeiro e o último.
const colegas = ["Patrick", "Breno", "Gustavo", "Karina"];

// Ignora os elementos do meio deixando os espaços em branco entre vírgulas
const [primeiroColega, , , ultimoColega] = colegas; // Destructuring de array

console.log(`\n--- BLOCO 1 - EX 3 ---`);
console.log(`Primeiro colega: ${primeiroColega} | Último colega: ${ultimoColega}`);


// =====================================================================
// BLOCO 2 DE 4: Spread, Rest e Módulos
// =====================================================================

// --- EXERCÍCIO 2.1 ---
// Dado um array cores = ["azul", "verde"], use spread para criar um novo array adicionando "amarelo".(sem alterar o array original)
const cores = ["azul", "verde"];

// O operador spread (...) copia os elementos do array original sem alterá-lo (imutabilidade)
const coresAtualizadas = [...cores, "amarelo"];

console.log(`\n--- BLOCO 2 - EX 1 ---`);
console.log("Array original (intacto):", cores);
console.log("Novo array com spread:", coresAtualizadas);


// --- EXERCÍCIO 2.2 ---
// Escreva uma função mediaTurma(...notas) que recebe quantas notas quiser e devolve a média usando rest.
// O parâmetro rest (...notas) agrupa todos os argumentos passados em um único array
function mediaTurma(...notas) {
  if (notas.length === 0) return 0;
  
  // Usamos reduce para somar todas as notas e dividimos pela quantidade de elementos
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / notas.length;
}

console.log(`\n--- BLOCO 2 - EX 2 ---`);
console.log("Média da turma (3 notas):", mediaTurma(8.0, 7.5, 9.5));
console.log("Média da turma (5 notas):", mediaTurma(10, 6, 8, 7, 9));


// --- EXERCÍCIO 2.3 ---
// Crie dois arquivos imaginários: matematica.js (export nomeado) e um segundo arquivo que importa e usa.
/* 
   ---------------------------------------------------------------------
   ARQUIVO 1: matematica.js
   ---------------------------------------------------------------------
   export function somar(a, b) {
     return a + b;
   }

   ---------------------------------------------------------------------
   ARQUIVO 2: app.js
   ---------------------------------------------------------------------
   import { somar } from './matematica';

   console.log("Resultado da soma:", somar(10, 15));
*/


// =====================================================================
// BLOCO 3 DE 4: Métodos de Array
// =====================================================================

const precos = [50, 120, 35, 200];

// --- EXERCÍCIO 3.1 ---
// Use filter para pegar só os valores acima de 100.
const precosAltos = precos.filter((valor) => valor > 100);

console.log(`\n--- BLOCO 3 - EX 1 ---`);
console.log("Preços acima de 100:", precosAltos);


// --- EXERCÍCIO 3.2 ---
// Use map para aplicar 10% de desconto em todos os preços (multiplicar por 0.9).
const precosComDesconto = precos.map((valor) => valor * 0.1);

console.log(`\n--- BLOCO 3 - EX 2 ---`);
console.log("Preços com 10% de desconto:", precosComDesconto);


// --- EXERCÍCIO 3.3 ---
// Use reduce para somar o total de uma lista de 5 números à sua escolha.
const numeros = [10, 20, 30, 40, 50];
const totalSoma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(`\n--- BLOCO 3 - EX 3 ---`);
console.log("Soma total da lista com reduce:", totalSoma);


// --- EXERCÍCIO 3.4 ---
// Dado uma lista de alunos com id e nome, use find para localizar o aluno com id igual a 3.
const listaAlunos = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" },
  { id: 4, nome: "Diego" },
];

const alunoEncontrado = listaAlunos.find((aluno) => aluno.id === 3);

console.log(`\n--- BLOCO 3 - EX 4 ---`);
console.log("Aluno com ID 3 encontrado:", alunoEncontrado);


// =====================================================================
// BLOCO 4 DE 4: Refatoração ES5 -> ES6+ e JSON
// =====================================================================

// --- EXERCÍCIO 4.1 ---
// Refatore este código ES5: var nome = "Léo"; console.log("Olá " + nome + "!");
// Refatorado com 'const' e Template Literal:
const nomeLeo = "Léo";
console.log(`\n--- BLOCO 4 - EX 1 ---`);
console.log(`Olá ${nomeLeo}!`);


// --- EXERCÍCIO 4.2 ---
// Refatore: função antiga com 'var self = this' e concatenação de string, usando arrow function e destructuring.

/*
  CÓDIGO ANTIGO (ES5):
  var grupo = {
    titulo: "React Native",
    membros: ["Alice", "Bob"],
    exibirMembros: function() {
      var self = this;
      this.membros.forEach(function(membro) {
        console.log(membro + " faz parte do curso " + self.titulo);
      });
    }
  };
*/

// CÓDIGO REFATORADO (ES6+):
// Arrow functions não possuem seu próprio 'this', eliminando a necessidade de 'var self = this'.
const grupoRefatorado = {
  titulo: "React Native",
  membros: ["Alice", "Bob"],
  exibirMembros() {
    const { titulo } = this; // Destructuring para pegar o título diretamente
    this.membros.forEach((membro) => {
      // Arrow function mantendo o 'this' no escopo do objeto e template literal
      console.log(`${membro} faz parte do curso ${titulo}`);
    });
  },
};

console.log(`\n--- BLOCO 4 - EX 2 ---`);
grupoRefatorado.exibirMembros();


// --- EXERCÍCIO 4.3 ---
// Crie um objeto curso, converta para texto com JSON.stringify e depois converta de volta com JSON.parse.
const curso = {
  nome: "Desenvolvimento Mobile",
  horas: 40,
  ativo: true,
};

// 1. Convertendo Objeto JS -> Texto JSON (String)
const cursoJSON = JSON.stringify(curso);
console.log(`\n--- BLOCO 4 - EX 3 ---`);
console.log("JSON em texto (JSON.stringify):", cursoJSON);

// 2. Convertendo Texto JSON -> Objeto JS novamente
const cursoObjeto = JSON.parse(cursoJSON);
console.log("De volta para Objeto JS (JSON.parse):", cursoObjeto);