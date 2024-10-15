import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Services from './Services';
import Feedback from '../screens/FeedbackForm';
import NewsLetter from './NewsLetter';

const Drawer = createDrawerNavigator();

export default function Features() {
  return (
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'right',
      drawerType: 'slide',
      drawerStyle: {
        backgroundColor: '#FBDABB',
        width: 200,
      },
      drawerActiveTintColor: '#fff', 
      drawerInactiveTintColor: '#333333',
      drawerActiveBackgroundColor: '#333333',
      drawerInactiveBackgroundColor: '#FBDABB',
    }}
  >
    <Drawer.Screen name="Services" component={Services} />
    <Drawer.Screen name="NewsLetter" component={NewsLetter} />
    <Drawer.Screen name="Feedback" component={Feedback} />
  </Drawer.Navigator>
  );
}