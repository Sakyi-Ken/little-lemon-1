import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>    Little Lemon
      </Text> 
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    //flex: 0.2,
  },
  headerText: {
    fontSize: 30,
    padding: 40,
    textAlign: 'center',
    color: 'black',
  },
});

export default LittleLemonHeader;