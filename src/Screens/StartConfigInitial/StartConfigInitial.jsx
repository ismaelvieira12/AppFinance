import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Image, Text } from 'react-native'
import { styles } from './StartConfigInitialStyle'

export const StartConfigInitial = () => {
  const navigation = useNavigation();

  const handleFinalizarConfig = async () => {
    try {
      // Salva flag de que o usuário já configurou
      await AsyncStorage.setItem('configInicial', 'true');

      // Redireciona para Home
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao salvar configuração:', error);
    }
  };

  return (
   <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          source={require('../../../assets/imgs/imagem-inicialPNG03.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.boxInfor}>
        <View>
          <Text style={styles.title}>Um futuro mais seguro para você</Text>
        </View>
        <Text style={styles.subTitle}>Tendo previsibilidade financeira você garante uma vida muito mais tranquila e segura.</Text>
      </View>

      <View style={styles.boxLogin}>
        <TouchableOpacity style={styles.boxButtom}><Text style={styles.textBtn}>Criar uma conta</Text></TouchableOpacity>

        <View style={styles.boxTextsLogin}>
          <Text style={styles.textLogin}>Já possui uma conta? </Text>
          <Text style={styles.textFazerLogin}>Fazer login</Text>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

{/* <TouchableOpacity
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
</TouchableOpacity> */}