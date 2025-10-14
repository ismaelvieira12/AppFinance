import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { StatusBar } from 'expo-status-bar';

export const Menu = () => {
    return (
       <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Home" component={Wellcome} />
            </Drawer.Navigator>
       </NavigationContainer>
    );
}   