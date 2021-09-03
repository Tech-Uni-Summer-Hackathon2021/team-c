import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MyPageScreen from './MyPageScreen';
import MainPageScreen from './MainPageScreen';
import MemberlistScreen from './MemberListScreen';

const Stack = createStackNavigator();

export default function MainPageStackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="MyPage" component={MyPageScreen} />
      <Stack.Screen name="Mainpage" component={MainPageScreen} />
      <Stack.Screen name="MemberList" component={MemberlistScreen} />
    </Stack.Navigator>
  );
}
