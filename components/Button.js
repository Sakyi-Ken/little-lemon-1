import * as React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({onPress, children, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[buttonStyles.buttonWrapper, disabled && buttonStyles.disabled]}
      disabled={disabled}
    >
      <Text style={buttonStyles.text}>{children}</Text>
    </Pressable>
  );
}  
const buttonStyles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
});

export default Button; 