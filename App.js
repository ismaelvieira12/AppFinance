import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Telas fora do Drawer
import { StartConfigInitial } from './src/Screens/StartConfigInitial/StartConfigInitial.jsx';
import ScreenLogin from './src/Screens/login/ScreenLogin.jsx';
import { ScreenRegister } from './src/Screens/register/ScreenRegister.jsx';

// Rotas do Drawer (telas principais)
import DrawerRoutes from './src/navigation/DrawerRoutes.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isConfigured, setIsConfigured] = useState(null);

  // Verifica se já existe configuração salva
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

  // Exibe carregamento enquanto verifica
  if (isConfigured === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#037df0" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Telas fora do Drawer */}
        <Stack.Screen name="StartConfigInitial" component={StartConfigInitial} />
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Register" component={ScreenRegister} />

        {/* Drawer principal (telas internas do app) */}
        <Stack.Screen
          name="Drawer"
          component={DrawerRoutes}
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
