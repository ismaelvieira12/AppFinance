import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';



// Suas telas
import { Wellcome } from './src/Screens/Wellcome/Wellcome.jsx';
import  MetasScreen  from './src/Screens/MetasScreen/MetasScreen.jsx';
import { StartConfigInitial } from './src/Screens/StartConfigInitial/StartConfigInitial.jsx';
import { ScreenLogin } from './src/Screens/login/ScreenLogin.jsx';
import { ScreenRegister } from './src/Screens/register/ScreenRegister.jsx';

const Drawer = createDrawerNavigator();

// mudando a forma de navegação
export default function App() {
  const [isConfigured, setIsConfigured] = React.useState(null); // null = carregando

  // 1️⃣ Verifica se já existe configuração salva
  React.useEffect(() => {
    const verificarConfiguracao = async () => {
      try {
        const valor = await AsyncStorage.getItem('configInicial');
        setIsConfigured(valor === 'true');
      } catch (error) {
        console.error('Erro ao verificar configuração:', error);
        setIsConfigured(false);
      }
    };
    verificarConfiguracao();
  }, []);

  // 2️⃣ Exibe carregamento enquanto verifica
  if (isConfigured === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#037df0" />
      </View>
    );
  }

  // 3️⃣ Define a tela inicial com base na configuração
  const initialRoute = isConfigured ? 'Home' : 'StartConfigInitial';

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={Wellcome} />
        <Drawer.Screen name="Metas" component={MetasScreen} />
        <Drawer.Screen name="StartConfigInitial" component={StartConfigInitial} />
        <Drawer.Screen name='Login' component={ ScreenLogin } />
        <Drawer.Screen name='Register' component={ ScreenRegister } />
        <Drawer.Screen name="index" component={require('./app/index').default} />
      </Drawer.Navigator>

       
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}