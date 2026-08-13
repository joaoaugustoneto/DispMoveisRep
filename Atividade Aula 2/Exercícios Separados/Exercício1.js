// Arquivo: ItemCompra.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Exercício 1: Componente recebe a prop 'nome' usando destructuring
export default function ItemCompra({ nome }) {
  return (
    <View style={styles.item}>
      <Text style={styles.texto}>{nome}</Text>
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
});




// Arquivo: App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
// Exercício 1: Importando o componente criado
import ItemCompra from './ItemCompra';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Exercício 1: Renderizando o mesmo componente 3 vezes com props diferentes */}
      <ItemCompra nome="Arroz" />
      <ItemCompra nome="Feijão" />
      <ItemCompra nome="Leite" />
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
});