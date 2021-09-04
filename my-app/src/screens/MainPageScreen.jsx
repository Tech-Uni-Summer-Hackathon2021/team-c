import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  RefreshControl,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

export default function MainPageScreen(props) {
  const { navigation } = props;
  const [taskText, setTaskText] = useState('');
  const hundlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/teamTask/`);
    const dataText = ref.doc('qPCM3RpCdR9UxNyfyJDa').get();
    console.log(dataText);
    ref.doc('qPCM3RpCdR9UxNyfyJDa').update({
      taskText,
    })
      .then((docRef) => {
        console.log('Created!', docRef.taskText);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
  const [refreshing, setRefreshing] = useState(false);
  const date = new Date();
  const year = date.getFullYear();
  const mounth = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const dayOfWeek = date.getDay();
  const dayOfWeekList = ['(Sun.)', '(Mon.)', '(Tus.)', '(Wed.)', '(Thu.)', '(Fri.)', '(Sat.)'];
  const label = dayOfWeekList[dayOfWeek];
  const totalTime = 10000;
  const oldTime = Date.now();

  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - oldTime;

    const remainMSec = totalTime - diff;
    const remainSec = Math.ceil(remainMSec / 1000);
  });
  const anyFunction = useCallback(async () => {
    setRefreshing(true);
    // 非同期処理(実際にはここでデータの更新を行う)
    await sleep(1000);
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={anyFunction} />
        }
      >
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
              <Text style={styles.year}>{year}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.date}>{mounth}/{day}</Text>
                <Text style={styles.dayOfWeek}>{label}</Text>
              </View>
              <View>
                <Text style={styles.clock}>{hour}:{minutes}</Text>
              </View>
              <TextInput
                style={styles.taskToday}
                value={taskText}
                onChangeText={(text) => { setTaskText(text); }}
                autoCapitalize="none"
              />
              <Text style={styles.timeLimit}>{timerId}</Text>
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
            left: 0,
            bottom: 125,
          }}
        />
        <CircleButton
          style={{
            left: 60,
            bottom: 125,
          }}
          onPress={() => { navigation.navigate('MyPage'); }}
        />
        <CircleButton
          style={{
            left: 120,
            bottom: 125,
            backgroundColor: '#90EE90',
          }}
          onPress={() => { navigation.navigate('MyPage'); }}
        />
        <CircleButton
          style={{
            right: 0,
            top: 473,
            backgroundColor: '#EE6363',
          }}
          onPress={() => { navigation.navigate('MyPage'); }}
        />
        <CircleButton
          style={{
            right: 60,
            top: 473,
            backgroundColor: '#FFEC8B',
          }}
          onPress={() => { navigation.navigate('MyPage'); }}
        />
        <CircleButton
          style={{
            right: 120,
            top: 473,
            backgroundColor: '#8B658B',
          }}
          onPress={() => { navigation.navigate('MyPage'); }}
        />
        <CircleButton
          name="edit"
          style={{
            right: 5,
            top: 415,
          }}
          onPress={() => {hundlePress}}
        />
      </ScrollView>
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
    bottom: 55,
    right: 65,
    fontSize: 40,
    opacity: 0.7,
  },
  topHome: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    fontSize: 25,
    flexDirection: 'row',
  },
  topLine: {
    position: 'absolute',
    bottom: -10,
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
    top: 150,
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#DDDEE0',
    borderWidth: 1,
    borderRadius: 2,
    height: 270,
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
