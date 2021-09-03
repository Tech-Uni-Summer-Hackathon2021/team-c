import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import MyPageScreen from './MyPageScreen';
import MainPageScreen from './MainPageScreen';
import MemberlistScreen from './MemberListScreen';
import MemberProfileScreen from './MemberProfileScreen';
import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';

import { firebaseConfig } from '../../env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function MainPageStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="MainPage" component={MainPageScreen} />
      <Stack.Screen name="MemberProfile" component={MemberProfileScreen} />
    </Stack.Navigator>
  );
}
