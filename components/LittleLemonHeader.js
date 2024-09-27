import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#FACE14'}}>
      <Text style={{ padding: 40, fontsize: 30,  color: 'black',}}numberOfLines={3}>Welcome
        <Text style={{ fontWeight: 'bold'}}> Little Lemon</Text> 
      </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

export default LittleLemonHeader;