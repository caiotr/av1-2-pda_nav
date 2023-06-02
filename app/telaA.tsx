import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text,Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bed.png')}/> 
      <Text style={styles.paragraph}>Sobre:</Text>
      <Text style={styles.paragraph}> Bedman é um antagonista da série Guilty Gear, que aparece pela primeira vez como um personagem jogável em Guilty Gear Xrd -Sign-. Ele serviu Ariels em sua busca para criar o Mundo Absoluto para que ele e sua irmã Delilah pudessem viver no mundo desperto. Ele morreu no final de Guilty Gear Xrd - Revelator-, mas revelou possuir sua estrutura de cama reforçada em Guilty Gear -Strive-'s Another Story. A estrutura da cama, ao lado de Delilah, foi confirmada como um personagem DLC jogável sob o nome de Bedman?. </Text>
      <Link href="./telaB">Vá para tela cadastro</Link>

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
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});