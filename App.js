import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './image_hkd.jpeg'; 

export default function App() {
  return (
    <View style={styles.container}>

       <Text style={styles.instructions2}>
      Voir - The true social media</Text>
      <Image source={logo} style={styles.logo} /> 

      <Text style={styles.instructions}>
      To share reviews with your friends, just press the button below!</Text>
      <StatusBar style="auto" />

       <TouchableOpacity
        onPress={() => alert('Hello, welcome to your sharing space!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Share a Review</Text>
      </TouchableOpacity>

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
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  instructions2: {
    color: '#fff',
    fontSize: 25,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },  
});
