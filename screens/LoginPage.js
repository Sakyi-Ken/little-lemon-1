import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

const loginPage = () => {
  const [userName, onChangeUserName] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAvoidingView style={loginStyles.container}>
      <ScrollView keyboardDismissMode='on-drag'>
        <Text style={loginStyles.headerText}>
          Welcome to Little Lemon
        </Text>
        <Text style={loginStyles.regularText}>Login to continue</Text>
        <TextInput
          style={loginStyles.input} 
          value={userName}
          onChangeText={onChangeUserName}
          placeholder={'username'}
          keyboardType={'email-address'}
        />
        <TextInput 
          style={loginStyles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder={'pin'}
          keyboardType={'numeric'}
          secureTextEntry={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
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
})

export default loginPage;