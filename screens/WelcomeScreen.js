import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native';

export default function WelcomeScreen () {
  const [firstName, onChangeFirstName] = useState('');

  return (
  <KeyboardAvoidingView behavior="padding" style={welcomeStyles.container}>
  <ScrollView keyboardDismissMode='on-drag'>
    <Text style={welcomeStyles.headerText}>
      Welcome to Little Lemon
    </Text>
    <Text style={welcomeStyles.regularText}>
      Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
    </Text>
    <TextInput 
      value={firstName}
      onChangeText={onChangeFirstName}
      style={welcomeStyles.input}
      placeholder={'First Name'}
      keyboardType={'email-address'}
      onFocus={() => {Alert.alert('Type Only Your First Name')}}
      onBlur={() => {Alert.alert('Thank you!')}} 
    />
  </ScrollView>
  </KeyboardAvoidingView>
  )
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
