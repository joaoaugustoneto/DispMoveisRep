// Arquivo: App.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ItemCompra from './ItemCompra';

export default function App() {
  const [texto, setTexto] = useState('');
  
  // Exercício 3: Estado de array para guardar a lista de itens
  const [itens, setItens] = useState([]);

  // Exercício 3: Função para adicionar o novo item ao array
  function adicionarItem() {
    // Evita adicionar itens vazios
    if (texto.trim() === '') return;

    // Adiciona o novo objeto no array sem mutar o estado original (Imutabilidade)
    setItens([
      ...itens,
      {
        id: Date.now().toString(), // ID único baseado no timestamp
        nome: texto,
      },
    ]);

    // Limpa o campo de texto após adicionar
    setTexto('');
  }

  return (
    <View style={styles.container}>
      {/* Campo de Entrada */}
      <TextInput
        style={styles.input}
        placeholder="Digite um item da lista"
        value={texto}
        onChangeText={(novoTexto) => setTexto(novoTexto)}
      />

      {/* Exercício 3: Botão TouchableOpacity para adicionar o item */}
      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      {/* Exercício 3: Renderizando a lista dinâmica com .map() */}
      <View style={styles.lista}>
        {itens.map((item) => (
          <ItemCompra key={item.id} nome={item.nome} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F3F4F6',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#3B82F6',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lista: {
    flex: 1,
  },
});