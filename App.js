import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Wellcome } from './src/Screens/Wellcome/Wellcome.jsx';
const Drawer = createDrawerNavigator();
import * as React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Drawer.Screen name="Home" component={Wellcome} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

