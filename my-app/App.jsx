import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import MemberListScreen from './src/screens/MemberListScreen';
import MainPageScreen from './src/screens/MainPageScreen';
import MyPageScreen from './src/screens/MyPageScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="MemberList" component={MemberListScreen} />
        <Tab.Screen name="MainPage" component={MainPageScreen} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
