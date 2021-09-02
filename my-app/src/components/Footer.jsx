import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Footer(props) {
  const { navigation } = props;
  const memberListIcon = () => { navigation.navigate('MemberList'); };
  const homeIcon = () => { Alert.alert('homeIcon Clicked!'); };
  const myPageIcon = () => { Alert.alert('myPageIcon Clicked!'); };
  return (
    <View style={styles.footer}>
      <Ionicons
        name="ios-people"
        size={40}
        style={styles.iosPeopleIcon}
        onPress={memberListIcon}
      />
      <FontAwesome
        name="home"
        size={40}
        style={styles.homeIcon}
        onPress={homeIcon}
      />
      <MaterialCommunityIcons
        name="shield-account"
        size={40}
        style={styles.shieldAccountIcon}
        onPress={myPageIcon}
      />
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
