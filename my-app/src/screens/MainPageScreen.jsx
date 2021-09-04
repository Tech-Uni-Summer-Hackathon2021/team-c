import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Date,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { NavigationContainer } from '@react-navigation/native';

export default function MainPageScreen(props) {
  const { navigation } = props;
  const [taskText, setTaskText] = useState('');
  const hundlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/teamTask`);
    ref.add({
      taskText,
    })
      .then((docRef) => {
        console.log('Created!', docRef.taskText);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topLine}>
          <Text>ー</Text>
        </View>
        <Text style={styles.topHome}>ホーム</Text>
        <View style={[{
          transform: [
            { rotateY: '50deg' },
            { rotateZ: '-20deg' },
          ],
        }]}
        >
          <Text style={styles.backHome}>Home</Text>
        </View>
      </View>
      <View>
        <View style={styles.taskContent}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.year}>2021</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.date}>00：00：00</Text>
              <Text style={styles.dayOfWeek}>(Fri.)</Text>
            </View>
            <View>
              <Text style={styles.clock}>21:00</Text>
            </View>
            <TextInput
              style={styles.taskToday}
              value={taskText}
              onChangeText={(text) => { setTaskText(text); }}
            />
            <Text style={styles.timeLimit}>00:00:00</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.thirPant}> </Text>
            <Text style={styles.sixPant}> </Text>
            <Text style={styles.sixPant}> </Text>
            <Text style={styles.sixPant}> </Text>
            <Text style={styles.sixPant}> </Text>
            <Text style={styles.ninPant}> </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.zeroPasent}>0%</Text>
            <Text style={styles.oneHunPasent}>100%</Text>
          </View>
        </View>
      </View>
      <CircleButton
        style={{
          right: 50,
          bottom: 140,
        }}
        onPress={() => { navigation.navigate('MyPage'); }}
      />
      <CircleButton
        style={{
          right: 110,
          bottom: 140,
          backgroundColor: '#EE6363',
        }}
        onPress={() => { navigation.navigate('MyPage'); }}
      />
      <CircleButton
        style={{
          right: 170,
          bottom: 140,
          backgroundColor: '#FFEC8B',
        }}
        onPress={() => { navigation.navigate('MyPage'); }}
      />
      <CircleButton
        style={{
          left: 50,
          top: 175,
          backgroundColor: '#8B658B',
        }}
        onPress={() => { navigation.navigate('MyPage'); }}
      />
      <CircleButton
        style={{
          left: 110,
          top: 175,
          backgroundColor: '#90EE90',
        }}
        onPress={() => { navigation.navigate('MyPage'); }}
      />
      <CircleButton
        style={{
          left: 170,
          top: 175,
        }}
        onPress={() => { navigation.navigate('MyPage'); }}
      />
      <CircleButton
        name="edit"
        style={{
          right: 60,
          top: 250,
        }}
        onPress={hundlePress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  year: {
    fontSize: 10,
    color: '#00000099',
  },
  date: {
    fontSize: 20,
    color: '#00000099',
  },
  dayOfWeek: {
    fontSize: 20,
    color: '#00000099',
  },
  clock: {
    color: '#00000099',
  },
  taskToday: {
    padding: 17,
    fontSize: 35,
    color: '#246082',
  },
  backHome: {
    fontStyle: 'italic',
    color: '#AECED9CC',
    bottom: 250,
    right: 130,
    fontSize: 30,
    opacity: 0.7,
  },
  topHome: {
    position: 'absolute',
    bottom: 190,
    right: 130,
    fontSize: 20,
    flexDirection: 'row',
  },
  topLine: {
    position: 'absolute',
    bottom: 180,
    fontSize: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#A6A9B0',
    width: 1000,
    right: -200,
  },
  timeLimit: {
    fontSize: 30,
    color: '#00000099',
  },
  zeroPasent: {
    fontSize: 15,
    right: 0,
  },
  oneHunPasent: {
    fontSize: 15,
    left: 220,
  },
  taskContent: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#DDDEE0',
    borderWidth: 1,
    borderRadius: 2,
    height: 250,
    width: 300,
  },
  thirPant: {
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#C0C0C0C0',
    borderRadius: 5,
  },
  sixPant: {
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#00B7DF33',
    borderRadius: 5,
  },
  ninPant: {
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#00B7DF33',
    borderRadius: 5,
  },

});
