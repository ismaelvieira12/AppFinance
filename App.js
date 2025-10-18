import { StatusBar } from 'expo-status-bar';
import { Wellcome } from './src/Screens/Wellcome/Wellcome.jsx';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { MetasScreen } from './src/Screens/MetasScreen/MetasScreen.jsx';
import { StartConfigInitial } from './src/Screens/StartConfigInitial/StartConfigInitial.jsx';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={Wellcome} />
        <Drawer.Screen name='Metas' component={MetasScreen} />
        <Drawer.Screen name='StartConfigInitial' component={StartConfigInitial} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

