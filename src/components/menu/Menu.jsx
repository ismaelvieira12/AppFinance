import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Wellcome } from '../../Screens/Wellcome/Wellcome.jsx';
const Drawer = createDrawerNavigator();

export const Menu = () => {
    return (
       <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Home" component={Wellcome} />
            </Drawer.Navigator>
       </NavigationContainer>
    );
}   