// Arquivo: App.js
import React, { useState } from 'react'; // Exercício 2: Importando useState
import { View, TextInput, StyleSheet } from 'react-native';

export default function App() {
  // Exercício 2: Estado para controlar o que o usuário digita
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      {/* Exercício 2: TextInput controlado conectado ao estado 'texto' */}
      <TextInput
        style={styles.input}
        placeholder="Digite um item da lista"
        value={texto} // Controla o que é exibido no campo
        onChangeText={(novoTexto) => setTexto(novoTexto)} // Atualiza o estado a cada tecla
      />
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
  },
});



