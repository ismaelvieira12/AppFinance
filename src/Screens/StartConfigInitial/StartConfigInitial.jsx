import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const StartConfigInitial = () => {
  const navigation = useNavigation();

  const handleFinalizarConfig = async () => {
    try {
      // Salva flag de que o usuário já configurou
      await AsyncStorage.setItem('configInicial', 'true');

      // Redireciona para Home
      navigation.replace('Home');
    } catch (error) {
      console.error('Erro ao salvar configuração:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configuração Inicial do App</Text>

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#037df0',
          padding: 10,
          borderRadius: 8,
        }}
        onPress={handleFinalizarConfig}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Finalizar Configuração
        </Text>
      </TouchableOpacity>
    </View>
  );
};
