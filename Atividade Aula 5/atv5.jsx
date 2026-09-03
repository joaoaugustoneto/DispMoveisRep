import React from 'react';

// ==========================================
// BLOCO 1 - Exercício 1
// Crie um elemento JSX que exibe o seu nome dentro de uma tag <h1>.
// ==========================================
// Salvamos o JSX em uma constante. Adicionamos a frase obrigatória da atividade.
const tituloNome = <h1>Seu Nome </h1>;

// ==========================================
// BLOCO 1 - Exercício 2
// Crie constantes com seu nome e idade e exiba em um <p> usando { }.
// ==========================================
// Criação das variáveis
const meuNome = "Seu Nome";
const minhaIdade = 25;
// Injeção de dependências no JSX com a frase solicitada
const dadosPessoais = <p>Nome: {meuNome}, Idade: {minhaIdade}.</p>;

// ==========================================
// BLOCO 1 - Exercício 3
// Envolva dois elementos JSX soltos usando um Fragmento <>...</>.
// ==========================================
// O fragmento permite agrupar múltiplos elementos sem criar uma "div" extra no DOM.
const elementosAgrupados = (
  <>
    <h1>Título Qualquer</h1>
    <p>Texto do parágrafo.</p>
  </>
);

import React from 'react';

// ==========================================
// BLOCO 2 - Exercício 1
// Componente Saudacao que retorna "Bem-vindo(a) ao curso!".
// ==========================================
// Todo componente React precisa começar com letra maiúscula.
function Saudacao() {
  return <h1>Bem-vindo(a) ao curso!</h1>;
}

// ==========================================
// BLOCO 2 - Exercício 2
// Componente CardPerfil exibindo nome e curso dentro de um Fragmento.
// ==========================================
// Usando <> e </> para agrupar os textos.
function CardPerfil() {
  return (
    <>
      <p>Nome: Aluno Exemplo</p>
      <p>Curso: Engenharia de Software.</p>
    </>
  );
}

// ==========================================
// BLOCO 2 - Exercício 3
// Encontre o erro e corrija: function meuComponente() { return <p>Oi</p>; }
// ==========================================
// ERRO: No React, componentes devem ter a primeira letra maiúscula (PascalCase). 
// Componentes com letra minúscula são interpretados como tags HTML nativas.
function MeuComponente() {
  return <p>Oi!</p>;
}

import React from 'react';

// ==========================================
// BLOCO 3 - Exercício 1
// Em comentário, escreva como ficaria o export default de Saudacao.
// ==========================================
// Como exportar por padrão no final do arquivo (incluindo a frase extra):
// 
// export default Saudacao;


// ==========================================
// BLOCO 3 - Exercício 2
// Crie componentes App e Rodape e use o Rodape dentro do App.
// ==========================================

// Primeiro declaramos o componente filho
function Rodape() {
  return <footer>Este é o rodapé</footer>;
}

// Em seguida, o componente pai renderiza o filho inserindo <Rodape />
function App() {
  return (
    <div>
      <h1>Aplicação Principal</h1>
      <Rodape />
    </div>
  );
}

// ==========================================
// BLOCO 3 - Exercício 3
// Explique por que só pode existir um export default por arquivo.
// ==========================================
// 
// EXPLICAÇÃO: O `export default` é o recurso do JavaScript desenhado 
// para definir qual é a "saída principal" e única de um módulo. Como é o 
// retorno padrão, quem importa pode nomeá-lo como quiser, logo, só pode 
// haver um. Já os `export` nomeados servem para exportar várias funções 
// utilitárias secundárias do mesmo arquivo.
// 

// Importamos View e Text do react-native, necessários para mobile
import { View, Text } from 'react-native';
import React from 'react';

// ==========================================
// BLOCO 4 - Exercício 1[cite: 1]
// Reescreva <div><h1>Título</h1><p>Texto</p></div> para React Native.[cite: 1]
// ==========================================
// <div> vira <View>, e textos vão sempre dentro de <Text>
const TrechoRN = () => (
  <View>
    <Text>Título</Text>
  </View>
);

// ==========================================
// BLOCO 4 - Exercício 2
// Liste 3 elementos HTML e seus equivalentes em React Native.
// ==========================================
// 
// 1. HTML: <div>  --> React Native: <View>
// 2. HTML: <p>    --> React Native: <Text>
// 3. HTML: <img>  --> React Native: <Image>
// 

// ==========================================
// BLOCO 4 - Exercício 3
// Monte um PerfilRN usando View e Text (nome e curso).
// ==========================================
function PerfilRN() {
  // Criamos o contêiner com View e colocamos cada dado em um Text separado
  return (
    <View>
      <Text>Nome: Ana Silva</Text>
      <Text>Curso: Desenvolvimento Mobile</Text>
    </View>
  );
}