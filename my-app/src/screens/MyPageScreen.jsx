import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Image, TextInput,
} from 'react-native';

const face = require('../../assets/face.jpg');

export default function MyPageScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={face}
          style={styles.face}
        />
        <Text style={styles.name}>永山 潤</Text>
        <View style={styles.myTask}>
          <TextInput>マイタスク</TextInput>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 300,
    paddingTop: 270,
    alignItems: 'center',
  },
  face: {
    width: 130,
    height: 130,
    borderRadius: 500,
    marginBottom: 10,
    left: 60,
  },
  name: {
    fontSize: 35,
    left: 65,
  },
  myTask: {
    marginTop: 40,
    height: 200,
    width: 250,
    backgroundColor: '#DDDEE0',
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
