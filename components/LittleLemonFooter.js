import React from 'react';
import {View , Text,} from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View 
      style={{
        backgroundColor: '#FACE14',
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center'
        }}>
        All rights reserved by Little Lemon, 2024
      </Text> 
    </View>
  );
}