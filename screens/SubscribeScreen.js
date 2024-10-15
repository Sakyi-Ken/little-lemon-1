import * as React from "react";
import { 
  View, 
  Image, 
  TextInput, 
  Text, 
  StyleSheet, 
  Alert,
} from 'react-native';
import Button from '../components/Button.js';
import {validateEmail} from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('')

  const isEmailValid = validateEmail(email);

  return (
      <View style={subscribeStyles.container}>
        <View style={subscribeStyles.contentContainer}>
          <Image 
            style={subscribeStyles.Image} 
            source={require('../img/little-lemon-logo-grey.png')}
            resizeMode='contain'
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
          />
          <Text style={subscribeStyles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
          </View>
        <TextInput
          style={subscribeStyles.input}
          value={email}
          onChangeText={setEmail}
          placeholder={'Type your email'}
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <Button 
          onPress={() => 
            Alert.alert('Thanks for subscribing, stay tuned!'
 )}
          disabled={!isEmailValid}
        >
          Subscribe
        </Button>
      </View>
  );
};

const subscribeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center' 
  },
  Image: {
    width: 350,
    height: 100,
    marginBottom: 32,
    marginTop: 30,
  },
  text: {
    color: '#333333',
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    borderColor: 'EDEFEE',
  },
});

export default SubscribeScreen;
