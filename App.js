import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Menu} from './src/components/menu/Menu.jsx';
import * as React from 'react';

export default function App() {
  return (
    <NavigationContainer>
        <Menu />
      {/*
        <Wellcome />
      */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

