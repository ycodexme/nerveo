import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AI-Nervo</Text>
      <Text style={styles.description}>
        AI-Nervo is an advanced AI chatbot that can interact with you in a variety of ways. It can generate text, discuss with PDF files and images, generate images, restore damaged photos, and convert text to audio and vice versa. All these features are powered by state-of-the-art AI technologies.
      </Text>
      <Text style={styles.description}>
        Explore the app and discover the power of AI!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home;