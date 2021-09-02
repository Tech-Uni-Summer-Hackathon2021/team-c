import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Footer from '../components/Footer';

export default function MyPageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>マイページ</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    paddingVertical: 30,
  },
});
