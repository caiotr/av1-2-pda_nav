import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text,Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bed.png')}/> 
      <Text style={styles.paragraph}>Você sabe as chances de um navio mágico simplesmente cair do céu sem motivo? Cerca de 0,00001%, mas realmente, essas probabilidades não significam nada, especialmente para você. As únicas probabilidades que importam são de vida e morte, e são cerca de 50-50. Então parabéns! Você sobreviveu. Você venceu as probabilidades. Por muito pouco.</Text>
      <Link href="./telaA">vá para tela sobre</Link>
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
  paragraph:{
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bed: {
    height: 128,
    width: 128,
    resizeMode: 'bed',
  },
});
