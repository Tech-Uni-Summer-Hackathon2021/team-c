import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogIn from './src/components/LogIn';

export default function App() {
  return (
    <View style={styles.container}>
      <LogIn />
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});
