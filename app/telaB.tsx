import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, TextInput, Image, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bed.png')} />
      <TextInput
        placeholder="Nome"
      />
      <TextInput
        placeholder="Email"

      />
      <TextInput
        placeholder="Data de Nascimento"

      />
      <TextInput
        placeholder="CPF"


      />
      <Button
        title="Salvar"

      />

      <Button
        title="Voltar"
      />

      <Link href="./telaC">Vá para tela Home</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

