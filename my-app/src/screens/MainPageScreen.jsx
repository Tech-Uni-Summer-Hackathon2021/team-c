import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MainPageScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.topHome}>ホーム</Text>
        <Text style={styles.backHome}>Home</Text>
      </View>
      <View>
        <View style={styles.taskContent}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.year}>2021</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.date}>8/13</Text>
              <Text style={styles.dayOfWeek}>(Fri.)</Text>
            </View>
            <View>
              <Text style={styles.clock}>21:00</Text>
            </View>
            <Text style={styles.taskToday}>環境構築</Text>
            <Text style={styles.timeLimit}>00:00:00</Text>
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
          bottom: 130,
        }}
        onPress={() => navigation.navigate('MemberProfile')}
      />
      <CircleButton style={{
        right: 110,
        bottom: 130,
      }}
      />
      <CircleButton style={{
        right: 170,
        bottom: 130,
      }}
      />
      <CircleButton style={{
        left: 50,
        top: 175,
      }}
      />
      <CircleButton style={{
        left: 110,
        top: 175,
      }}
      />
      <CircleButton style={{
        left: 170,
        top: 175,
      }}
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
    bottom: 190,
    right: 130,
    fontSize: 20,
  },
  topHome: {
    bottom: 190,
    right: 130,
    fontSize: 20,
    flexDirection: 'row',
    backgroundColor: 'blue',
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
  grad: {
    width: '100%',
    textAlign: 'center',
    padding: 10,
    color: '#fff',
  },

});
