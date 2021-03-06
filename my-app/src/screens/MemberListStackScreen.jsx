import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MyPageScreen from './MyPageScreen';
import MainPageScreen from './MainPageScreen';
import MemberlistScreen from './MemberListScreen';

const Stack = createStackNavigator();

export default function MemberListStackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="MyPage" component={MyPageScreen} />
      <Stack.Screen name="Mainpage" component={MainPageScreen} />
      <Stack.Screen
        name="MemberList"
        component={MemberlistScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
