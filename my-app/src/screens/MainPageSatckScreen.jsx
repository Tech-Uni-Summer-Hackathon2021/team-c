import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MyPageScreen from './MyPageScreen';
import MainPageScreen from './MainPageScreen';
import MemberlistScreen from './MemberListScreen';
import MemberProfileScreen from './MemberProfileScreen';

const Stack = createStackNavigator();

export default function MainPageStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainPage" component={MainPageScreen} />
      <Stack.Screen name="MemberProfile" component={MemberProfileScreen} />
    </Stack.Navigator>
  );
}
