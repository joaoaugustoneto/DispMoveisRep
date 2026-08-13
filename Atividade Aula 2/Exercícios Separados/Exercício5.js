// Arquivo: ItemCompra.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Exercício 5: Recebe a prop 'onRemover'
export default function ItemCompra({ nome, comprado, onToggle, onRemover }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onToggle} style={styles.areaTexto}>
        <Text style={[styles.texto, comprado && styles.textoComprado]}>
          {nome}
        </Text>
      </TouchableOpacity>

      {/* Exercício 5: Botão de remoção individual do item */}
      <TouchableOpacity style={styles.botaoRemover} onPress={onRemover}>
        <Text style={styles.textoBotaoRemover}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  areaTexto: {
    flex: 1,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  textoComprado: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  // Exercício 5: Estilo do botão de remoção
  botaoRemover: {
    backgroundColor: '#EF4444',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  textoBotaoRemover: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});




// Arquivo: App.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
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
        comprado: false,
      },
    ]);

    setTexto('');
  }

  function toggleComprado(id) {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  }

  // Exercício 5: Função para remover um item usando .filter()
  function removerItem(id) {
    setItens(itens.filter((item) => item.id !== id));
  }

  // Exercício 5 (Desafio Extra 2): Contador de itens pendentes
  const faltamComprar = itens.filter((i) => !i.comprado).length;

  return (
    <View style={styles.container}>
      {/* Exercício 5: Exibição do contador */}
      <Text style={styles.contador}>Faltam comprar: {faltamComprar}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um item da lista"
        value={texto}
        onChangeText={(novoTexto) => setTexto(novoTexto)}
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <ScrollView style={styles.lista}>
        {/* Exercício 5 (Desafio Extra 1): Renderização condicional com ternário */}
        {itens.length === 0 ? (
          <Text style={styles.textoVazio}>Sua lista está vazia!</Text>
        ) : (
          itens.map((item) => (
            <ItemCompra
              key={item.id}
              nome={item.nome}
              comprado={item.comprado}
              onToggle={() => toggleComprado(item.id)}
              onRemover={() => removerItem(item.id)} // Passa a função de remoção
            />
          ))
        )}
      </ScrollView>
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
  contador: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#4B5563',
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
  textoVazio: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
});