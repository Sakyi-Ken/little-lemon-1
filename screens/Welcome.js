import React from 'react';
import {View, Image, StyleSheet, Text,} from 'react-native';

const Welcome = () => {
  return (
    <View style={welcomeStyles.container}>
      <Image style={welcomeStyles.logo} source={require('../img/Little-Lemon-Logo.png')} />
      <Text style={welcomeStyles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 10,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
})

export default Welcome;