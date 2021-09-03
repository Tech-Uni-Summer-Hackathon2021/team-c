import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import MemberListScreen from './src/screens/MemberListScreen';
import MainPageScreen from './src/screens/MainPageScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import MainPageStackScreen from './src/screens/MainPageSatckScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  const TabNatigation = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'MemberList') {
        iconName = focused ? 'bandage' : 'bandage-outline';
      } else if (route.name === 'MainPage') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'MyPage') {
        iconName = focused ? 'body' : 'body-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainPage"
        screenOptions={TabNatigation}
      >
        <Tab.Screen name="MemberList" component={MemberListScreen} />
        <Tab.Screen name="MainPage" component={MainPageStackScreen} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
