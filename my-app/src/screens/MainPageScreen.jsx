import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MainPageScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.topHome}>ホーム</Text>
      </View>
      <View>
        <View style={styles.honmaContent}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>2021</Text>
            <Text style={styles.textA}>8/13</Text>
            <Text style={styles.text}>Fri.</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.textB}>一</Text>
              <Text style={styles.textC}>今日のタスク</Text>
              <Text style={styles.textB}>一</Text>
            </View>
            <Text style={styles.textD}>デザイン作成</Text>
            <Text style={styles.textE}>00:00:00</Text>
            <View>
              <Text>某</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.TextF}>0%</Text>
            <Text style={styles.TextF}>100%</Text>
          </View>
        </View>
      </View>
      <CircleButton style={{
        right: 100,
        bottom: 185,
      }}
      />
      <CircleButton style={{
        right: 140,
        bottom: 185,
      }}
      />
      <CircleButton style={{
        right: 180,
        bottom: 185,
      }}
      />
      <CircleButton style={{
        left: 100,
        top: 185,
      }}
      />
      <CircleButton style={{
        left: 140,
        top: 185,
      }}
      />
      <CircleButton style={{
        left: 180,
        top: 185,
      }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  topHome: {
    bottom: 180,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textA: {
    fontSize: 14,
    color: '#C0C0C0',
  },
  textC: {
    padding: 17,
    fontSize: 14,
    color: '#C0C0C0',
  },
  textB: {
    paddingTop: 10,
    paddingRight: 0,
    fontSize: 30,
    color: '#000080',
  },
  textD: {
    fontSize: 20,
    color: '#000080',
    textDecorationLine: 'underline',
  },
  textE: {
    fontSize: 40,
    color: '#C0C0C0',
  },
  text: {
    fontSize: 10,
    color: '#C0C0C0',
  },
  TextF: {
    fontSize: 7,
    justifyContent: 'space-between',
  },
  honmaContent: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 2,
  },
});
