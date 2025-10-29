import {Drawer} from 'expo-router/drawer';


export const RootLayout = () => {
  return (
    <Drawer screenOptions={{headerShown: false}} initialRouteName='index'>

        {/* <Drawer.Screen name="index" />
        <Drawer.Screen name="Wellcome" /> 
        <Drawer.Screen name="MetasScreen" /> */}
        <Drawer.Screen name="index" />
        {/* <Drawer.Screen name="login/ScreenLogin" />
        <Drawer.Screen name="register/ScreenRegister" /> */}
    </Drawer>
  );
}