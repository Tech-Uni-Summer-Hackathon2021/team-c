import React, { useEffect } from 'react';
import {
  View, StyleSheet, Text, Image, TextInput,
} from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import LogOutButton from '../components/LogOutButton';

const face = require('../../assets/face.jpg');

export default function MyPageEditScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.LogOut}>
        <LogOutButton />
      </View>
      <View>
        <View>
          <Image
            source={face}
            style={styles.face}
          />
          <View style={styles.nameBox}>
            <Text style={styles.name}>永山 潤</Text>
            <AntDesign name="edit" size={27} style={styles.nameEditIcon} />
          </View>
          <View style={styles.myTask}>
            <TextInput>マイタスク</TextInput>
          </View>
          <EvilIcons
            name="check"
            size={50}
            style={styles.checkIcon}
            onPress={() => { navigation.navigate('MyPage'); }}
          />
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
  nameBox: {
    flexDirection: 'row',
  },
  nameEditIcon: {
    position: 'absolute',
    right: 35,
    paddingTop: 9,
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
  checkIcon: {
    right: 0,
    paddingLeft: 200,
    marginTop: 25,
    color: 'red',
  },
  LogOut: {
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: 35,
    right: 40,
    fontSize: 60,
    borderRadius: 5,
  },
});
