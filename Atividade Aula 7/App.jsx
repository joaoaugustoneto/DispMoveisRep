import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// ==========================================
// BLOCO 1 e 2 - useState Básico e Atualização Funcional
// ==========================================
const Contador = () => {
  // Bloco 1.1: Componente Contador com estado 'numero' iniciado em 0
  const [numero, setNumero] = useState(0);

  /*
  Bloco 2.2 - Explicação: 
  Por que a forma funcional (n => n + 1) é mais segura?
  R: Quando o usuário clica muito rápido várias vezes, o React pode agrupar (batch) 
  as atualizações de estado para melhorar a performance. Se usarmos setNumero(numero + 1), 
  ele pode pegar um valor desatualizado do estado. A forma funcional garante que o React 
  sempre use o valor mais recente (garantido) que está na memória antes de atualizar.
  */

  return (
    <View style={styles.card}>
      <Text style={styles.textoDestaque}>Número: {numero}</Text>
      <View style={styles.botoesRow}>
        {/* Bloco 1.2 e Bloco 2.1: Botão soma 1 usando a forma funcional */}
        <Button title="+ Somar" onPress={() => setNumero(n => n + 1)} />
        <View style={{ width: 10 }} />
        {/* Bloco 1.3: Botão subtrai 1 */}
        <Button title="- Subtrair" onPress={() => setNumero(n => n - 1)} color="#e53935" />
      </View>
    </View>
  );
};

// Bloco 2.3: Componente Visibilidade com estado booleano
const Visibilidade = () => {
  const [visivel, setVisivel] = useState(true);

  return (
    <View style={styles.card}>
      <Button 
        title={visivel ? "Esconder Texto" : "Mostrar Texto"} 
        onPress={() => setVisivel(v => !v)} // Alterna entre true e false
        color="#8e24aa"
      />
      {visivel && <Text style={[styles.texto, { marginTop: 15 }]}> Olá! Eu estou visível!</Text>}
    </View>
  );
};

// ==========================================
// BLOCO 3 - Objetos e Arrays no Estado
// ==========================================

// Bloco 3.1: Componente Perfil com estado objeto
const Perfil = () => {
  const [perfil, setPerfil] = useState({ nome: 'Ana', idade: 20 });

  const atualizarIdade = () => {
    // Usa spread (...) para copiar as propriedades antigas e sobrescrever apenas a idade
    setPerfil(prev => ({ ...prev, idade: prev.idade + 1 }));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Nome: {perfil.nome}</Text>
      <Text style={styles.texto}>Idade: {perfil.idade} anos</Text>
      <View style={{ marginTop: 10 }}>
        <Button title="Fazer Aniversário " onPress={atualizarIdade} color="#43a047" />
      </View>
    </View>
  );
};

/*
Bloco 3.3 - Explicação:
Por que NÃO usamos itens.push(novoItem) diretamente no estado?
R: No React, o estado deve ser tratado como IMUTÁVEL. O método .push() modifica 
o array original na mesma referência de memória. Se a referência da memória não muda, 
o React não percebe que o estado foi alterado e não renderiza a tela novamente. 
Ao usar o spread [...antigo, novo], criamos um array TOTALMENTE NOVO, forçando a re-renderização.
*/

// Bloco 3.2: Componente ListaCompras com estado array
const ListaCompras = () => {
  const [itens, setItens] = useState(['Maçã', 'Banana']);

  const adicionarItem = () => {
    // Cria um novo array copiando os itens anteriores e adicionando o novo
    setItens(prevItens => [...prevItens, `Novo Item ${prevItens.length + 1}`]);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.textoDestaque}>Lista de Compras:</Text>
      {itens.map((item, index) => (
        <Text key={index} style={styles.itemLista}>• {item}</Text>
      ))}
      <View style={{ marginTop: 10 }}>
        <Button title="Adicionar Item " onPress={adicionarItem} color="#f39c12" />
      </View>
    </View>
  );
};

// ==========================================
// BLOCO 4 - Projeto: Contador Completo
// ==========================================
const ContadorCompleto = () => {
  const [numero, setNumero] = useState(0);

  // Bloco 4.2: Regra de não ficar negativo (bloqueia decremento)
  const decrementar = () => {
    if (numero > 0) {
      setNumero(n => n - 1);
    }
  };

  return (
    <View style={[styles.card, { borderColor: '#1976d2', borderWidth: 2 }]}>
      <Text style={styles.textoDestaque}>Contador PRO: {numero}</Text>
      
      {/* Bloco 4.3: Mensagem condicional quando chega a 10 */}
      {numero >= 10 && (
        <Text style={styles.alerta}> Valor máximo atingido!</Text>
      )}

      {/* Bloco 4.1: Botões de Incrementar, Decrementar e Resetar */}
      <View style={styles.botoesColumn}>
        <Button title="Incrementar" onPress={() => setNumero(n => n + 1)} />
        <View style={{ height: 10 }} />
        
        <Button 
          title="Decrementar" 
          onPress={decrementar} 
          // Desabilita visualmente o botão se for 0 para melhor UX
          disabled={numero === 0} 
        />
        <View style={{ height: 10 }} />
        
        <Button title="Resetar" onPress={() => setNumero(0)} color="#7f8c8d" />
      </View>
    </View>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (App) - Onde tudo é testado
// ==========================================
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 07 - Estado com useState</Text>

      <Text style={styles.subtitulo}>Bloco 1 e 2: Contador e Visibilidade</Text>
      <Contador />
      <Visibilidade />

      <Text style={styles.subtitulo}>Bloco 3: Objetos e Arrays</Text>
      <Perfil />
      <ListaCompras />

      <Text style={styles.subtitulo}>Bloco 4: Projeto Contador Completo</Text>
      <ContadorCompleto />

      {/* Espaço extra no final da rolagem */}
      <View style={{ height: 50 }} />
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
    marginTop: 20,
    color: '#111'
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#1976d2',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  textoDestaque: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
    textAlign: 'center'
  },
  itemLista: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
    marginBottom: 5,
  },
  alerta: {
    color: '#d32f2f',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    backgroundColor: '#ffebee',
    padding: 8,
    borderRadius: 4,
  },
  botoesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botoesColumn: {
    flexDirection: 'column',
  }
});