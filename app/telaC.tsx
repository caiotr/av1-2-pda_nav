import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const images = [
  { id: 1, source: require('../assets/bed.png') },
  { id: 2, source: require('../assets/bedman1.png') },
  { id: 3, source: require('../assets/bedman2.png') },
  { id: 4, source: require('../assets/bedman3.png') },
  { id: 5, source: require('../assets/bedman4.jpg') },
  { id: 6, source: require('../assets/bedman5.jpg') },
  { id: 7, source: require('../assets/bedman6.jpg') },
  { id: 8, source: require('../assets/bedman7.jpg') },
];

const GroupedImages = () => {
  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image.source} style={styles.image} />
        </View>
      ))}
      <StatusBar style="auto" />
      <Link style={styles.link} href="/">Volte para tela index</Link>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: '2',
    aspectRatio: 2,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover', 
  },
  link:{
 
  }
});

export default GroupedImages;


