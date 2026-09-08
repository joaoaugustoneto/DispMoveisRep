import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Aluno = ({ nome, curso, media }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        O nome do aluno é <Text style={styles.bold}>{nome}</Text>, o curso é{' '}
        <Text style={styles.bold}>{curso}</Text>, e a média dele é{' '}
        <Text style={styles.bold}>{media}</Text>.
      </Text>
      
      {/* Exibe o badge de "Aprovado" apenas se a média for maior que 7 */}
      {media > 7 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.aprovadoText}>Aprovado</Text>
        </View>
      )}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Alunos</Text>
      
      <Aluno
        nome="Karina Modesto"
        curso="Desenvolvimento mobile"
        media={9.5}
      />
      <Aluno
        nome="Gustavo F. Aura"
        curso="Desenvolvimento mobile"
        media={8.0}
      />
      <Aluno
        nome="João A"
        curso="Desenvolvimento mobile"
        media={4.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: '#F3F4F6', // Cor de fundo cinza bem claro
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF', // Fundo branco para o card
    padding: 20,
    borderRadius: 12, // Bordas arredondadas
    marginBottom: 15,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombras para Android
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24, // Melhora a leitura
  },
  bold: {
    fontWeight: 'bold',
    color: '#111827',
  },
  badgeContainer: {
    marginTop: 15,
    backgroundColor: '#10B981', // Verde
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start', // Faz o fundo verde abraçar apenas o texto
  },
  aprovadoText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  }
});