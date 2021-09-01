import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <Appbar.Header style={styles.header}>
      <Ionicons name="people" size={50} color="white" style={styles.peopleIcon} />
      <FontAwesome name="home" size={50} color="white" style={styles.peopleIcon} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  peopleIcon: {
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
});
