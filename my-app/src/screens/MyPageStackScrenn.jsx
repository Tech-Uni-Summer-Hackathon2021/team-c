import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPageScreen from './MyPageScreen';
import MyPageEditScreen from './MyPageEdiScreen';
import LogInScreen from './LogInScreen';

const Stack = createStackNavigator();

export default function MyPageStackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="MyPage" component={MyPageScreen} />
      <Stack.Screen name="MyPageEdit" component={MyPageEditScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  );
}
