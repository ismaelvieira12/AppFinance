import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

// Defina suas telas aqui
import { Wellcome } from './src/Screens/Wellcome/Wellcome.jsx';
import { MetasScreen } from './src/Screens/MetasScreen/MetasScreen.jsx';
import { StartConfigInitial } from './src/Screens/StartConfigInitial/StartConfigInitial.jsx';
import { ScreenLogin } from './src/Screens/login/ScreenLogin.jsx';
import { ScreenRegister } from './src/Screens/register/ScreenRegister.jsx';

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

const RootStack = createNativeStackNavigator({
  
    initialRouteName: initialRoute,
    screens: {
        // Defina suas telas aqui
        Wellcome: Wellcome,
        MetasScreen: MetasScreen,
        StartConfigInitial: StartConfigInitial,
        ScreenLogin: ScreenLogin,
        ScreenRegister: ScreenRegister,
    }
});

export const AppNavigator = createStaticNavigation(RootStack);