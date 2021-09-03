import React from 'react';
import { StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function FooterStack() {
  return (
    <TouchableOpacity style={styles.footer}>
      <Ionicons
        name="ios-people"
        size={40}
        style={styles.iosPeopleIcon}
      />
      <FontAwesome
        name="home"
        size={40}
        style={styles.homeIcon}
      />
      <MaterialCommunityIcons
        name="shield-account"
        size={40}
        style={styles.shieldAccountIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    fontSize: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  iosPeopleIcon: {
    color: 'black',
    paddingHorizontal: 40,
  },
  homeIcon: {
    color: 'black',
    paddingHorizontal: 35,
  },
  shieldAccountIcon: {
    color: 'black',
    paddingHorizontal: 40,
  },
});
