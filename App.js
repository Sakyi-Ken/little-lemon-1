import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import WelcomeScreen from './screens/WelcomeScreen'
//import MenuItems from './screens/MenuItems'
//import FeedbackForm from './screens/FeedbackForm'
import LoginPage from './screens/LoginPage'
//mport Welcome from './screens/Welcome';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader  />
          <StatusBar style="auto" />

          <stack.Navigator 
            initialRouteName='Login'
            screenOptions={{ headerStyle: {backgroundColor: '#FBDABB'}}}>
            <stack.Screen
              options={{ title: 'Home'}} 
              name="Welcome" 
              component={WelcomeScreen} />
            <stack.Screen name="Login" component={LoginPage} />
          </stack.Navigator>
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
