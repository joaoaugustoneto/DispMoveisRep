import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// EXERCÍCIO 1: Importando o componente recém-criado
import ItemCompra from './ItemCompra';

export default function App() {
  // EXERCÍCIO 2: Estado para capturar o que o usuário digita no TextInput
  const [texto, setTexto] = useState('');
  
  // EXERCÍCIO 3: Estado que armazena o array (lista) de itens
  const [itens, setItens] = useState([]);

  // EXERCÍCIO 3: Função para adicionar um novo item
  function adicionarItem() {
    // Evita adicionar um item se o texto estiver vazio apenas com espaços
    if (texto.trim() === '') return;

    // Usando o SPREAD OPERATOR (...) para não mutar o array diretamente (não usar .push!)
    setItens([
      ...itens,
      {
        id: Date.now().toString(), // Gera um ID único para a 'key'
        nome: texto,               
        comprado: false,           // EXERCÍCIO 4: Novo item sempre começa como não comprado
      },
    ]);

    // Limpa o campo de texto para o usuário digitar o próximo item
    setTexto('');
  }

  // EXERCÍCIO 4: Função para marcar/desmarcar item como comprado
  function toggleComprado(id) {
    setItens(
      // .map() cria um novo array verificando item por item
      itens.map((item) =>
        item.id === id
          ? { ...item, comprado: !item.comprado } // Se for o item clicado, inverte o boolean
          : item // Se não for, mantém o item igual
      )
    );
  }

  // EXERCÍCIO 5: Função para remover um item específico
  function removerItem(id) {
    // .filter() retorna um array NOVO contendo apenas os itens que passaram no teste
    // Ou seja, mantém todos cujo ID é DIFERENTE do ID que queremos remover
    setItens(itens.filter((item) => item.id !== id));
  }

  // DESAFIO EXERCÍCIO 5: Calcular quantos itens faltam comprar
  // Filtra itens com 'comprado: false' e pega o tamanho (.length) do array resultante
  const faltamComprar = itens.filter((i) => !i.comprado).length;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      {/* DESAFIO EXERCÍCIO 5: Mostrando o contador dinâmico */}
      <Text style={styles.contador}>Faltam comprar: {faltamComprar}</Text>

      {/* EXERCÍCIO 2: View de Entrada Controlada */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item da lista"
          value={texto} // Conectando o input ao estado 'texto'
          onChangeText={(novoTexto) => setTexto(novoTexto)} // Atualizando o estado a cada tecla
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
          <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* ScrollView para permitir rolar a tela se a lista ficar muito grande */}
      <ScrollView style={styles.lista}>
        
        {/* EXERCÍCIO 5: Renderização condicional com ternário (lista vazia x cheia) */}
        {itens.length === 0 ? (
          <Text style={styles.textoVazio}>Sua lista está vazia! Adicione algo.</Text>
        ) : (
          // EXERCÍCIO 3: Usando .map() para transformar dados em interface
          itens.map((item) => (
            <ItemCompra
              key={item.id} // EXERCÍCIO 3: Key é obrigatória para performance do React
              nome={item.nome}
              comprado={item.comprado}
              onToggle={() => toggleComprado(item.id)} // EXERCÍCIO 4: Passando função como prop
              onRemover={() => removerItem(item.id)}   // EXERCÍCIO 5: Passando função como prop
            />
          ))
        )}
        
      </ScrollView>
    </View>
  );
}

// Estilos básicos para organizar o app usando Flexbox
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F3F4F6',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
  },
  contador: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    color: '#4B5563',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
  },
  botaoAdicionar: {
    backgroundColor: '#3B82F6', // Azul
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
  },
  textoBotaoAdicionar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lista: {
    flex: 1,
  },
  textoVazio: {
    textAlign: 'center',
    marginTop: 40,
    color: '#9CA3AF',
    fontSize: 16,
    fontStyle: 'italic',
  }
});