import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

import Page1 from './src/screens/Page1';
import Page2 from './src/screens/Page2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: Header }}>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
