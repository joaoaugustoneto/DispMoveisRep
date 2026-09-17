// Código feito do prof sem offline e online

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function PainelStatus() {
  const [hora, setHora] = useState('');
  const [status, setStatus] = useState('Online');
  const [tempoTela, setTempoTela] = useState(0);

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const timerHora = setInterval(() => {
      const agora = new Date();
      setHora(agora.toLocaleTimeString('pt-BR'));
    }, 1000);

    // Contador de tempo na tela
    const timerTempo = setInterval(() => {
      setTempoTela((prev) => prev + 1);
    }, 1000);

    // Limpeza dos intervalos ao desmontar o componente
    return () => {
      clearInterval(timerHora);
      clearInterval(timerTempo);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu App</Text>

      <Text style={styles.texto}>🕐 Hora: {hora || '--:--:--'}</Text>
      <Text style={styles.texto}>📶 Status: {status}</Text>
      <Text style={styles.texto}>⏳ Tempo na tela: {tempoTela}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  texto: {
    fontSize: 18,
    marginVertical: 5,
    color: '#555',
  },
});

---------------------

// Código feito com checagem online e offline

import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

// Componente principal
function PainelStatus() {

  // ----------------------------------------------------------
  // ESTADO DA HORA
  // ----------------------------------------------------------
  //
  // "hora" guarda a hora atual.
  // "setHora" é a função utilizada para alterar "hora".
  //
  // new Date() pega a data e hora atuais do dispositivo.
  const [hora, setHora] = useState(new Date());


  // ----------------------------------------------------------
  // ESTADO DA CONEXÃO
  // ----------------------------------------------------------
  //
  // "online" informa se estamos simulando uma conexão ativa.
  //
  // O valor inicial é true.
  const [online, setOnline] = useState(true);


  // ----------------------------------------------------------
  // ESTADO DO TEMPO NA TELA
  // ----------------------------------------------------------
  //
  // Guarda quantos segundos o componente está sendo exibido.
  //
  // Começamos em 0.
  const [tempoNaTela, setTempoNaTela] = useState(0);


  // ----------------------------------------------------------
  // USEEFFECT — ATUALIZAR RELÓGIO
  // ----------------------------------------------------------
  //
  // Este efeito cria um relógio que atualiza a cada segundo.
  useEffect(() => {

    // setInterval repete uma função em determinado intervalo.
    //
    // 1000 milissegundos = 1 segundo.
    const id = setInterval(() => {

      // Atualizamos o estado com uma nova data/hora.
      setHora(new Date());

    }, 1000);


    // Quando o componente sair da tela,
    // cancelamos o intervalo.
    return () => clearInterval(id);

  }, []);


  // ----------------------------------------------------------
  // USEEFFECT — STATUS ONLINE/OFFLINE
  // ----------------------------------------------------------
  //
  // Este efeito simula uma conexão alternando
  // entre Online e Offline a cada 4 segundos.
  useEffect(() => {

    // 4000 milissegundos = 4 segundos.
    const id = setInterval(() => {

      // "atual" representa o valor atual de online.
      //
      // ! inverte o valor:
      //
      // true  → false
      // false → true
      setOnline((atual) => !atual);

    }, 4000);


    // Cancelamos o intervalo quando o componente
    // for desmontado.
    return () => clearInterval(id);

  }, []);


  // ----------------------------------------------------------
  // USEEFFECT — CONTADOR
  // ----------------------------------------------------------
  //
  // Este efeito aumenta o contador a cada segundo.
  useEffect(() => {

    const id = setInterval(() => {

      // "t" representa o valor atual do contador.
      //
      // Somamos 1 ao valor atual.
      setTempoNaTela((t) => t + 1);

    }, 1000);


    // Cancelamos o intervalo quando o componente
    // sair da tela.
    return () => clearInterval(id);

  }, []);


  // ----------------------------------------------------------
  // INTERFACE
  // ----------------------------------------------------------

  return (
    <View style={styles.container}>

      {/* Título do aplicativo */}
      <Text style={styles.titulo}>
        Meu App
      </Text>


      {/* Relógio atual */}
      <Text>
        🕐 Hora: {hora.toLocaleTimeString()}
      </Text>


      {/*
        Operador ternário:

        Se online for true:
        mostramos "🟢 Online".

        Se online for false:
        mostramos "🔴 Offline".
      */}
      <Text>
        📶 Status: {online ? "🟢 Online" : "🔴 Offline"}
      </Text>


      {/* Contador de tempo na tela */}
      <Text>
        ⏳ Tempo na tela: {tempoNaTela}s
      </Text>

    </View>
  );
}


// ------------------------------------------------------------
// ESTILOS
// ------------------------------------------------------------
//
// StyleSheet.create() organiza os estilos do aplicativo.
const styles = StyleSheet.create({

  // Estilo do container principal.
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  // Estilo do título.
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20
  }

});


// Exportamos o componente para que o Expo possa utilizá-lo.
export default PainelStatus;