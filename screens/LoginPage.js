import React, { useState } from 'react';
import { 
  ScrollView, 
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Pressable 
} from 'react-native';

const LoginPage = ( { navigation } ) => {
  const [email , onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateInputs = () => {
    const emailValid = email.includes('@') && email.includes('.');
    const passwordValid = password.length > 0;
    setIsValid(emailValid && passwordValid);
  };

  const setEmail = (text) => {
    onChangeEmail(text);
    validateInputs();
  };

  const setPassword = (text) => {
    onChangePassword(text);
    validateInputs();
  }; 

  const handleLogin = () => {
    navigation.navigate('Welcome');
  }

  return (
    <KeyboardAvoidingView style={loginStyles.container}>
      <ScrollView keyboardDismissMode='on-drag'>
        <Text style={loginStyles.headerText}>
          Welcome to Little Lemon
        </Text>
        <Text style={loginStyles.regularText}>Login to continue</Text>
        <TextInput
          style={loginStyles.input} 
          value={email}
          onChangeText={setEmail}
          placeholder={'email'}
          keyboardType={'email-address'}
        />
        <TextInput 
          style={loginStyles.input}
          value={password}
          onChangeText={setPassword}
          placeholder={'pin'}
          keyboardType={'numeric'}
          secureTextEntry={true}
        />
        <Pressable 
          style={[loginStyles.button, !isValid && loginStyles.buttonDisabled]} 
          onPress={handleLogin}
          disabled={!isValid}>
          <Text style={loginStyles.buttonText}>Log in</Text>
        </Pressable>
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
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    borderColor: 'gray',
  }
})

export default LoginPage;