import * as React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import Button from '../components/Button.js';

const Welcome = ( {navigation} ) => {
  return (
    <View style={welcomeStyles.container}>
      <View style={welcomeStyles.contentContainer}>
        <Image 
          style={welcomeStyles.Image} 
          source={require('../img/little-lemon-logo (2).png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'} 
        />
        <Text style={welcomeStyles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
  
      <Button
        onPress={() => {
          navigation.navigate('Subscribe');
        }}
      >
        Newsletter
      </Button>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: 200,
    height: 300,
  },
  title: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
    marginTop: 48,
    fontWeight: 'bold',
    paddingVertical: 10,

  },
});
export default Welcome;