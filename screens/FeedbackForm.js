import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');

  return (
    <ScrollView style={feedStyles.container}>
      <Text style={feedStyles.headingSection}>
        How was your visit to Little Lemon?
      </Text>
      <Text style={feedStyles.infoSection}>
        Little Lemon is a charming neighborhood bistro with a warm and inviting atmosphere. We are committed to providing our guests with a memorable dining experience. We serve simple food and classic cocktails in a lively but casual environment. Please take a moment to share your feedback with us, we would love to hear your experience with us!
      </Text>
      <TextInput
        style={feedStyles.input}
        onChangeText={onChangeFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={feedStyles.input}
        onChangeText={onChangeLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <TextInput
        style={feedStyles.input}
        onChangeText={onChangePhoneNumber}
        value={phoneNumber}
        placeholder="Phone Number"
      />
      <TextInput
        style={feedStyles.messageInput}
        onChangeText={onChangeMessage}
        value={message}
        placeholder="Message"
        multiline={true}
        numberOfLines={4}
      />
    </ScrollView>
  );
}

const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#F4CE14',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
})
