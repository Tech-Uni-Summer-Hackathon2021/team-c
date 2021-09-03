import React from 'react';
import {
  View, StyleSheet, Text, Image, TextInput, Alert,
} from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import LogOutButton from '../components/LogOutButton';

const face = require('../../assets/face.jpg');

export default function MyPageEditScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={face}
          style={styles.face}
        />
        <Text style={styles.name}>永山 潤</Text>
        <AntDesign name="edit" size={30} />
        <View style={styles.myTask}>
          <TextInput>マイタスク</TextInput>
        </View>
        <EvilIcons name="check" size={30} onPress={() => { navigation.navigate('MyPage'); }} />
        <View>
          <LogOutButton />
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
  settingIcon: {
    position: 'absolute',
    paddingLeft: 150,
    paddingBottom: 50,
    top: 45,
    right: 89,
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
