import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Defina suas telas aqui
import { Wellcome } from './src/Screens/Wellcome/Wellcome.jsx';
import { MetasScreen } from './src/Screens/MetasScreen/MetasScreen.jsx';
import { StartConfigInitial } from './src/Screens/StartConfigInitial/StartConfigInitial.jsx';
import { ScreenLogin } from './src/Screens/login/ScreenLogin.jsx';
import { ScreenRegister } from './src/Screens/register/ScreenRegister.jsx';


const RootStack = createNativeStackNavigator({
  
    initialRouteName: 'StartConfigInitial',
    screens: {
        // Defina suas telas aqui
        Wellcome: Wellcome,
        MetasScreen: MetasScreen,
        StartConfigInitial: StartConfigInitial,
        ScreenLogin: ScreenLogin,
        ScreenRegister: ScreenRegister,
    }
});

const AppNavigator = createStaticNavigation(RootStack);


export default function App() {
  return <AppNavigator />;
}