import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
//import WelcomeScreen from './screens/WelcomeScreen'

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader  />
        <StatusBar style="auto" />
      </View>
      <View style={{backgroundColor: '#495E57',}}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
