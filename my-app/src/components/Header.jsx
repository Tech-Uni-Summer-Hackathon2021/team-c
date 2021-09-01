import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.BackAction />
      <FontAwesome name="home" size={50} color="white" style={styles.peopleIcon} />
      <Text style={styles.title}>KOREDAKE</Text>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
  },
});
