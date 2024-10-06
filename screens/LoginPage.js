import React, { useState } from 'react';
import { 
  ScrollView, 
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Pressable 
} from 'react-native';

const LoginPage = () => {
  const [userName, onChangeUserName] = useState('');
  const [password, onChangePassword] = useState('');

  const [loggedIn, onLogin] = useState(false);

  return (
    <KeyboardAvoidingView style={loginStyles.container}>
      <ScrollView keyboardDismissMode='on-drag'>
        <Text style={loginStyles.headerText}>
          Welcome to Little Lemon
        </Text>
        {loggedIn && <Text style={loginStyles.headerText}>You are logged in!</Text>}

        {!loggedIn && (
        <>
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
          <Pressable style={loginStyles.button} onPress={() => onLogin(!loggedIn)}>
            <Text style={loginStyles.buttonText}>Log in</Text>
          </Pressable>
        </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
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
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: 'EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
})

export default LoginPage;