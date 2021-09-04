import React, { useState } from 'react';
import {
  View, StyleSheet, Image, TextInput,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import LogOutButton from '../components/LogOutButton';

const face = require('../../assets/face.jpg');

export default function MyPageEditScreen(props) {
  const { navigation } = props;
  const [nameText, setNameText] = useState('');

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/name`);
    ref.add({
      nameText,
    })
      .then((docRef) => {
        console.log('Created!', docRef.name);
        navigation.navigate('MyPage');
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };
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
            <TextInput
              editable
              value={nameText}
              style={styles.name}
              onChangeText={(text) => { setNameText(text); }}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.myTask}>
            <TextInput>マイタスク</TextInput>
          </View>
          <EvilIcons
            name="check"
            size={50}
            style={styles.checkIcon}
            onPress={handlePress}
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
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 4,
    fontSize: 35,
  },
  name: {
    fontSize: 35,
  },
  myTask: {
    marginTop: 30,
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
