import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginPage from './screens/LoginPage'
import Features from './screens/Features';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader  />
          <StatusBar style="auto" />

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
        </View>

        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  }
});
