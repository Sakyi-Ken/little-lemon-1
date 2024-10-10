import React from 'react';
import { Image, Text, StyleSheet, View, Pressable } from 'react-native';

const Welcome = ( {navigation} ) => {
  return (
    <View style={welcomeStyles.container}>
      <Image 
        style={welcomeStyles.Image} 
        source={require('../img/little-lemon-logo (2).png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'} 
      />
      <View style={welcomeStyles.containerTitle}>
        <Text style={welcomeStyles.title}>
          Little Lemon, your local
        </Text>
        <Text style={welcomeStyles.title}>
          Mediterranean Bistro
        </Text>
      </View>
  
      <Pressable style={welcomeStyles.button}>
        <Text style={welcomeStyles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 22,
    color: '#333333',
  },
  containerTitle: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 80,
  },
  button:{
    backgroundColor: '#495E57',
    padding: 10,
    borderRadius: 8,
    marginTop: 70,
    width: 350,
    marginBottom: 50,
  },
  buttonText:{
    color: '#EDEFEE',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Welcome;