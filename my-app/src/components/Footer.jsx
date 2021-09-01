import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Ionicons name="ios-people" size={40} style={styles.iosPeopleIcon} />
      <FontAwesome name="home" size={40} style={styles.homeIcon} />
      <MaterialCommunityIcons name="shield-account" size={40} style={styles.shieldAccountIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 100,
    alignItems: 'center',
    paddingTop: 10,
    fontSize: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
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
