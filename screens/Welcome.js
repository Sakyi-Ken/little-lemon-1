import React from 'react';
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';

const Welcome = () => {
  return (
    <ScrollView style={welcomeStyles.container}>
      <Image 
        style={welcomeStyles.logo} 
        source={require('../img/Little-Lemon-Logo.png')}
        resizeMode="center" 
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={welcomeStyles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={welcomeStyles.image} 
        source={require('../img/Picture1.png')}
        resizeMode='cover'
        accessibility={true}
        accessibilityLabel={'A menu list on top of a table'}
      />
      <Image
        style={welcomeStyles.image} 
        source={require('../img/Picture2.png')}
        resizeMode='cover'
        accessibility={true}
        accessibilityLabel={'Picture of laddle inside a bowl with meat'}
      />
      <Image
        style={welcomeStyles.image} 
        source={require('../img/Picture3.png')}
        resizeMode='cover'
        accessibility={true}
        accessibilityLabel={'Picture of orange been cut into two'}
      />
      <Image
        style={welcomeStyles.image} 
        source={require('../img/Picture4.png')}
        resizeMode='cover'
        accessibility={true}
        accessibilityLabel={'Picture of fishes'}
      />
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
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
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  }
})

export default Welcome;