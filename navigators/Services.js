import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//import MenuItems from '../screens/MenuItems';
import Welcome from '../screens/MenuImage';
import MenuItems from '../sample/JsonMenuItems';

const Tab = createBottomTabNavigator();

export default function Services() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused ? 'image' : 'image-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Welcome" component={Welcome} 
        // options={{ headerShown: false }}
      />
      <Tab.Screen name="Menu" component={MenuItems} 
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}