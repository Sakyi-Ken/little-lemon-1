import React, { useState } from 'react';
import { 
  ScrollView, 
  View,
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Alert, 
  Image,
  //useColorScheme,
  // useWindowDimensions,
  Pressable,
} from 'react-native';

export default function WelcomeScreen ( { navigation }) {
  const [firstName, onChangeFirstName] = useState('');

  //const colorScheme = useColorScheme();

  //const {width, height, fontScale} = windows;

  return (
  <KeyboardAvoidingView 
    behavior="padding" 
    style={[
      welcomeStyles.container,
      // colorScheme === 'dark' ? {backgroundColor: '#1A1A1A'} : {backgroundColor: '#F2F2F2'}
      // colorScheme === 'light'
      //   ? { backgroundColor: '#fff', color: '#333333' }
      //   : { backgroundColor: '#333333' },
    ]}>
  <ScrollView keyboardDismissMode='on-drag'>
    <View style={welcomeStyles.header}>
      <Image
        style={welcomeStyles.logo}
        source={require('../img/Image-1.png')}
        resizeMode="cover" 
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text 
        style={[
          welcomeStyles.headerText,
          // colorScheme === 'light' ? {color: '#333333'} : {color: '#EDEFEE'}
        ]}>
        Little Lemon
      </Text>
    </View>
    <Text style={[
      welcomeStyles.regularText,
      // colorScheme === 'light' ? {color: '#333333'} : {color: '#EDEFEE'}
    ]}>
      Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
    </Text>
    <TextInput 
      value={firstName}
      onChangeText={onChangeFirstName}
      style={welcomeStyles.input}
      placeholder={'First Name'}
      keyboardType={'email-address'}
      onFocus={() => {Alert.alert('TYPE YOUR FIRST NAME')}}
      onBlur={() => {Alert.alert('Thank you!')}} 
    />
    <Pressable onPress={() => navigation.push('Features')}>
      <Text style={welcomeStyles.buttonText}>View Menu</Text>
    </Pressable>
  </ScrollView>
  </KeyboardAvoidingView>
  )
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
   headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    padding: 20,
    fontSize: 24,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'auto'
  },
  buttonText: {
    color: '#EDEFEE',
    fontSize: 32,
    textAlign: 'center',
  }, 
});
