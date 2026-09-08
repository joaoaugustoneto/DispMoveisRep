import React from 'react';
// Importação necessária para o Bloco 4 (React Native)
import { View, Text } from 'react-native';

// ==========================================
// BLOCO 1 - Exercício 1
// Crie um elemento JSX que exibe o seu nome dentro de uma tag <h1>.
// ==========================================
const ElementoNome = <h1>Seu Nome</h1>;

// ==========================================
// BLOCO 1 - Exercício 2
// Crie constantes com seu nome e sua idade, e exiba os dois dentro de um <p>.
// ==========================================
const meuNome = "Seu Nome";
const minhaIdade = 25;
const ElementoDados = <p>Nome: {meuNome}, Idade: {minhaIdade}</p>;

// ==========================================
// BLOCO 1 - Exercício 3
// Envolva dois elementos JSX soltos usando um Fragmento <>...</>.
// ==========================================
const ElementoAgrupado = (
  <>
    <h1>Título Qualquer</h1>
    <p>Texto do parágrafo.</p>
  </>
);

// ==========================================
// BLOCO 2 - Exercício 1
// Crie um componente Saudacao que retorna um JSX fixo dizendo "Bem-vindo(a) ao curso!".
// ==========================================
function Saudacao() {
  return <h1>Bem-vindo(a) ao curso!</h1>;
}

// ==========================================
// BLOCO 2 - Exercício 2
// Crie um componente CardPerfil que exibe, dentro de um Fragmento, um nome e um curso.
// ==========================================
function CardPerfil() {
  return (
    <>
      <p>Nome: Aluno Exemplo</p>
      <p>Curso: Engenharia de Software</p>
    </>
  );
}

// ==========================================
// BLOCO 2 - Exercício 3
// Este componente tem um erro. Encontre o erro e corrija.
// ==========================================
// Correção: A primeira letra do componente deve ser maiúscula (MeuComponente).
function MeuComponente() {
  return <p>Oi</p>;
}

// ==========================================
// BLOCO 3 - Exercício 1
// Em comentário, escreva como ficaria o export default do componente Saudacao.
// ==========================================
// 
// export default Saudacao;
//

// ==========================================
// BLOCO 3 - Exercício 3
// Em um comentário, explique por que só pode existir um export default por arquivo.
// ==========================================
//
// EXPLICAÇÃO: O `export default` define o retorno principal e único de um módulo. 
// Como ele representa "a coisa principal" daquele arquivo, quem o importa pode 
// dar o nome que quiser. Por isso, o JavaScript limita a apenas 1 por arquivo. 
// Já os exports nomeados permitem exportar várias funções menores do mesmo arquivo.
//

// ==========================================
// BLOCO 3 - Exercício 2 (Parte 1: Criar o Rodape)
// Crie dois componentes no mesmo arquivo — App e Rodape...
// ==========================================
function Rodape() {
  return (
    <footer style={{ marginTop: '30px', padding: '10px', backgroundColor: '#eee' }}>
      Este é o rodapé da aplicação.
    </footer>
  );
}

// ==========================================
// BLOCO 4 - Exercício 1
// Reescreva este trecho de React web para React Native.
// ==========================================
const TrechoRN = () => (
  <View>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Título</Text>
    <Text>Texto</Text>
  </View>
);

// ==========================================
// BLOCO 4 - Exercício 2
// Em um comentário, liste 3 elementos HTML e seus equivalentes no React Native.
// ==========================================
//
// 1. <div> = <View>
// 2. <p>   = <Text>
// 3. <img> = <Image>
//

// ==========================================
// BLOCO 4 - Exercício 3
// Monte um componente PerfilRN usando View e Text (nome e curso).
// ==========================================
function PerfilRN() {
  return (
    <View style={{ padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginVertical: 10 }}>
      <Text style={{ fontSize: 16 }}>Nome: Ana Silva</Text>
      <Text style={{ fontSize: 16 }}>Curso: Desenvolvimento Mobile</Text>
    </View>
  );
}

// ==========================================
// BLOCO 3 - Exercício 2 (Parte 2: Criar o App e usar o Rodapé)
// COMPONENTE PRINCIPAL PARA A PRÉVIA
// ==========================================
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      <h2>--- Bloco 1: JSX Básico ---</h2>
      {ElementoNome}
      {ElementoDados}
      {ElementoAgrupado}

      <hr />

      <h2>--- Bloco 2: Componentes Funcionais ---</h2>
      <Saudacao />
      <CardPerfil />
      <MeuComponente />

      <hr />

      <h2>--- Bloco 4: React Native ---</h2>
      <TrechoRN />
      <PerfilRN />

      {/* Uso do Rodape conforme exigido no Bloco 3, Exercício 2 */}
      <Rodape />
      
    </div>
  );
}