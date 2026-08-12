import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// EXERCÍCIO 1: Criando o componente usando destructuring nas props.
// O componente recebe os dados e as funções do pai (App.js).
export default function ItemCompra({ nome, comprado, onToggle, onRemover }) {
  return (
    <View style={styles.itemContainer}>
      
      {/* EXERCÍCIO 4: TouchableOpacity para permitir que o usuário toque no item */}
      {/* Ao tocar, ele chama a prop 'onToggle' que avisa o pai para inverter o estado */}
      <TouchableOpacity onPress={onToggle} style={styles.itemTextoContainer}>
        {/* Estilo Condicional: A cor e a linha riscada só são aplicadas se 'comprado' for true */}
        <Text style={[styles.texto, comprado && styles.textoComprado]}>
          {nome}
        </Text>
      </TouchableOpacity>

      {/* EXERCÍCIO 5: Botão extra para remover o item da lista */}
      <TouchableOpacity style={styles.botaoRemover} onPress={onRemover}>
        <Text style={styles.textoBotaoRemover}>Remover</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTextoContainer: {
    flex: 1, // Faz a área de clique do texto ocupar o máximo de espaço possível
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  textoComprado: {
    textDecorationLine: 'line-through', // Aplica o risco no texto (Ex 4)
    color: '#9CA3AF', // Deixa o texto com cor apagada (Ex 4)
  },
  botaoRemover: {
    backgroundColor: '#EF4444', // Cor vermelha para remoção
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