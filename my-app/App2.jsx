import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import Footer from './src/components/Footer';

import Page1 from './src/screens/Page1';
import Page2 from './src/screens/Page2';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainPageScreen from './src/screens/MainPageScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import MemberlistScreen from './src/screens/MemberListScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#79CDCD',
            height: 100,
          },
          headerTitleStyle: {
            color: 'white',
            textAlign: 'left',
            fontSize: 30,
            fontWeight: 'bold',
            paddingRight: 130,
          },
          headerTitle: 'KOREDAKE',
          headerTintColor: 'white',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="MainPage" component={MainPageScreen} />
        <Stack.Screen name="MemberList" component={MemberlistScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          opions={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
