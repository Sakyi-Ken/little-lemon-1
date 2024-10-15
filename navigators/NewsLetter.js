import React from 'react';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';

import SubscribeScreen from '../screens/SubscribeScreen';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

export default function NewsLetter () {
  return (
    <Stack.Navigator
      screenOptions={{
        initialRouteName: 'News',
        headerShown: false
      }}
    >
      <Stack.Screen name="News" component={Welcome} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
}