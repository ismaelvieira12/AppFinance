import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Telas
import { Wellcome } from './src/Screens/Wellcome/Wellcome.jsx';
import MetasScreen from './src/Screens/MetasScreen/MetasScreen.jsx';
import { StartConfigInitial } from './src/Screens/StartConfigInitial/StartConfigInitial.jsx';
import ScreenLogin from './src/Screens/login/ScreenLogin.jsx';
import { ScreenRegister } from './src/Screens/register/ScreenRegister.jsx';
import { ColorGlobal } from './src/paletaColor/ColorGlobal.js';
import  PlanejamentoMensal  from './src/Screens/planejamentoMensal/PlanejamentoMensal.jsx';

// Cria os navegadores
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Drawer com as telas principais do app
function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Wellcome} />
      <Drawer.Screen name="Metas" component={MetasScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isConfigured, setIsConfigured] = useState(null);

  // Verifica se o usuário já fez a configuração inicial
  useEffect(() => {
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

  // Exibe loading enquanto verifica
  if (isConfigured === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={ColorGlobal.AzulNormal} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {!isConfigured ? (
          <Stack.Screen name="StartConfigInitial" component={StartConfigInitial} />
        ) : (
          <Stack.Screen name="Drawer" component={DrawerRoutes} />
        )}

        {/* Telas fora do Drawer */}
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Register" component={ScreenRegister} />
        <Stack.Screen name="PlanejamentoMensal" component={PlanejamentoMensal} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
