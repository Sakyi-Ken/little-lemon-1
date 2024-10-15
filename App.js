import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import LittleLemonHeader from './components/LittleLemonHeader'
//import LittleLemonFooter from './components/LittleLemonFooter'
import RootNavigator from './navigators/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <RootNavigator/>
      </View>

      {/* <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View> */}
    </NavigationContainer>
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
