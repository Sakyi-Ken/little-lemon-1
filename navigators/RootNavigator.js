import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginPage from '../screens/LoginPage'
import Features from './Features';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{ 
        headerStyle: {backgroundColor: '#FBDABB'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        options={{ title: 'Home'}} 
        name="Welcome" 
        component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Features" component={Features} />
    </Stack.Navigator>
  );
}