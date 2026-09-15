import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// ==========================================
// BLOCO 1 - Props Básico
// ==========================================
// 1. Crie um componente Saudacao (props) que recebe uma prop nome e exibe "Olá, {nome}!".
// 3. Refatore Saudacao para usar destructuring de props ({ nome }) em vez de props.nome.
const Saudacao = ({ nome }) => {
  return <Text style={styles.texto}>Olá, {nome}!</Text>;
};

// ==========================================
// BLOCO 2 - children e Composição
// ==========================================
// 1. Crie um componente Caixa que recebe children e exibe dentro de uma <View> qualquer.
const Caixa = ({ children }) => {
  return (
    <View style={styles.caixa}>
      {children}
    </View>
  );
};

/*
3. Explicação: qual a diferença entre passar dado via prop nomeada e via children?
R: Passar dado via prop nomeada (ex: texto="Oi") é focado em enviar valores simples 
(strings, números, booleanos) para atributos específicos pré-definidos do componente. 
Já a prop 'children' permite passar e injetar elementos aninhados livremente (outras tags 
ou componentes inteiros) direto entre a tag de abertura e fechamento 
(ex: <Caixa> <Text>Oi</Text> </Caixa>), fazendo o componente agir como um "container".
*/

// ==========================================
// BLOCO 3 - Renderização Condicional
// ==========================================
// 1. Crie um componente StatusAluno que recebe a prop aprovado (true/false) e exibe "Aprovado!" ou "Reprovado" usando ternário.
const StatusAluno = ({ aprovado }) => {
  return <Text style={styles.texto}>{aprovado ? "Aprovado!" : "Reprovado"}</Text>;
};

// 2. Crie um componente Notificacao que recebe a prop mensagem e só exibe algo na tela se mensagem existir, usando &&.
const Notificacao = ({ mensagem }) => {
  // Se "mensagem" for verdadeira/existir, ele renderiza o <Text>. Caso contrário, não renderiza nada.
  return <>{mensagem && <Text style={styles.notificacao}>{mensagem}</Text>}</>;
};

// 3. Combine as duas técnicas: um componente que usa && para mostrar um selo "Novo" e ternário para mostrar um status.
const PainelAluno = ({ aprovado, novo }) => {
  return (
    <View style={styles.painel}>
      {novo && <Text style={styles.seloNovo}>Novo</Text>}
      <Text style={styles.texto}>{aprovado ? "Status: Aprovado!" : "Status: Reprovado"}</Text>
    </View>
  );
};

// ==========================================
// BLOCO 4 - Projeto: Cartão de Perfil
// ==========================================
// 1. Crie o componente CartaoPerfil (props) recebendo nome, cargo e departamento via props (Foto removida).
// 3. Adicione ao CartaoPerfil uma prop opcional destaque (booleano) que, se true, muda visualmente o cartão.
const CartaoPerfil = ({ nome, cargo, departamento, destaque }) => {
  return (
    // Se "destaque" for true, adicionamos o estilo "cartaoDestaque"
    <View style={[styles.cartao, destaque ? styles.cartaoDestaque : null]}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.departamento}>Setor: {departamento}</Text>
    </View>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (App) - Onde tudo é testado
// ==========================================
export default function App() {
  return (
    // Usei ScrollView no lugar de View para podermos rolar a tela e ver tudo
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 06 - Componentes e Props</Text>

      <Text style={styles.subtitulo}>Bloco 1: Props Básico</Text>
      {/* 2. Use o componente Saudacao três vezes, passando nomes diferentes cada vez. */}
      <Saudacao nome="Ana" />
      <Saudacao nome="Bruno" />
      <Saudacao nome="Carlos" />

      <Text style={styles.subtitulo}>Bloco 2: children e Composição</Text>
      {/* 2. Use o componente Caixa envolvendo um texto qualquer. */}
      <Caixa>
        <Text style={styles.texto}>Este é um texto passado via "children" para dentro da Caixa!</Text>
      </Caixa>

      <Text style={styles.subtitulo}>Bloco 3: Renderização Condicional</Text>
      <StatusAluno aprovado={true} />
      <StatusAluno aprovado={false} />
      
      <Notificacao mensagem="Você tem uma nova mensagem no sistema!" />
      <Notificacao /> {/* Esta não exibe nada pois não tem mensagem */}
      
      <PainelAluno aprovado={true} novo={true} />

      <Text style={styles.subtitulo}>Bloco 4: Cartão de Perfil</Text>
      {/* 2. Use CartaoPerfil três vezes com dados diferentes, dentro de um componente App. */}
      <CartaoPerfil 
        nome="Maria Silva" 
        cargo="Desenvolvedora Sênior" 
        departamento="Tecnologia (TI)"
        destaque={true} 
      />
      <CartaoPerfil 
        nome="João Souza" 
        cargo="UX Designer" 
        departamento="Produto / Design"
      />
      <CartaoPerfil 
        nome="Lucas Lima" 
        cargo="Gerente de Projetos" 
        departamento="Operações"
      />
      
      {/* Espaço extra no final da rolagem */}
      <View style={{height: 50}} />
    </ScrollView>
  );
}

// ==========================================
// ESTILOS (StyleSheet) (usei Ia pra ajudar a criar um estilo mais bonito)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
    color: '#111'
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#0056b3',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333'
  },
  caixa: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#0056b3',
    borderRadius: 8,
    backgroundColor: '#e6f2ff',
    marginBottom: 10,
  },
  notificacao: {
    padding: 10,
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  painel: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 5,
    backgroundColor: '#fff'
  },
  seloNovo: {
    color: '#fff',
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
    fontSize: 12,
    fontWeight: 'bold',
    overflow: 'hidden' // Garante as bordas no iOS
  },
  cartao: {
    padding: 15, 
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cartaoDestaque: {
    backgroundColor: '#fff3cd', 
    borderColor: '#ffeeba',
    borderWidth: 2,
  },
  nome: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cargo: {
    fontSize: 14, 
    color: '#666',
    marginBottom: 5,
  },
  departamento: {
    fontSize: 12,
    color: '#0056b3',
    fontWeight: 'bold',
    backgroundColor: '#e6f2ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  }
});