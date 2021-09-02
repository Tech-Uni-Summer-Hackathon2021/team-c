import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default function MainPageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>メンバー一覧ページ</Text>
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
