import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';

export default function Page1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>KOREDAKE</Text>
      <Button title="ここにタスクを表示" onPress={() => navigation.navigate('Page2')} />
      <Text style={styles.time}>00:00:00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 90,
  },
  text: {
    fontSize: 40,
  },
  time: {
    fontSize: 20,
  },
});
