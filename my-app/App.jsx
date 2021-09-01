import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

import Page1 from './src/screens/Page1';
import Page2 from './src/screens/Page2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
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
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
