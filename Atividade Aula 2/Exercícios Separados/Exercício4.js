// Arquivo: ItemCompra.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Exercício 4: Recebe as props 'comprado' e 'onToggle'
export default function ItemCompra({ nome, comprado, onToggle }) {
  return (
    <View style={styles.item}>
      {/* Exercício 4: Envolto em TouchableOpacity para detectar o toque */}
      <TouchableOpacity onPress={onToggle}>
        {/* Estilo Condicional: aplica textoRiscado apenas se 'comprado' for true */}
        <Text style={[styles.texto, comprado && styles.textoComprado]}>
          {nome}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  // Exercício 4: Estilo do item marcado como comprado
  textoComprado: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
});




// Arquivo: App.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ItemCompra from './ItemCompra';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionarItem() {
    if (texto.trim() === '') return;

    setItens([
      ...itens,
      {
        id: Date.now().toString(),
        nome: texto,
        comprado: false, // Exercício 4: Novo item inicia como não comprado
      },
    ]);

    setTexto('');
  }

  // Exercício 4: Função para inverter a propriedade 'comprado' de um item
  function toggleComprado(id) {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um item da lista"
        value={texto}
        onChangeText={(novoTexto) => setTexto(novoTexto)}
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <View style={styles.lista}>
        {itens.map((item) => (
          <ItemCompra
            key={item.id}
            nome={item.nome}
            comprado={item.comprado} // Passa o estado de 'comprado'
            onToggle={() => toggleComprado(item.id)} // Passa a função de toggle
          />
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