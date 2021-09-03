import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Image, TextInput,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import { Feather } from '@expo/vector-icons';

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
          <CircleButton
            name="edit"
            style={{
              right: 5,
              top: 155,
              width: 40,
              height: 40,
              backgroundColor: '#DDDEE0',
            }}
          />
          <CircleButton
            name="check-square"
            style={{
              right: 45,
              top: 155,
              width: 40,
              height: 40,
              backgroundColor: '#DDDEE0',
            }}
          />
        </View>
      </View>
      <CircleButton
        name="settings"
        style={{
          right: 10,
          top: 15,
        }}
      />
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
