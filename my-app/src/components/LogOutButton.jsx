import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert(
      'LogOut',
      'ログアウトしますか？',
      [
        {
          text: 'キャンセル',
        },
        {
          text: 'ログアウト',
          onPress: () => {
            firebase.auth().signOut()
              .then(() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'LogIn' }],
                });
              })
              .catch(() => {
                Alert.alert('ログアウトに失敗しました');
              });
          },
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 15,
    color: 'black',
  },
});
