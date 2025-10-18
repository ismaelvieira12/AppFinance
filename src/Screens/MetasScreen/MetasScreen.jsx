import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './MetasScreenStyle'
import { StatusBar, Image } from 'react-native'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat/400Regular';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat/700Bold';
import { useFonts } from '@expo-google-fonts/montserrat/useFonts';
import React from 'react'

export const MetasScreen = () => {

  // // Fontes
  //   let [fontsLoaded] = useFonts({
  //     Montserrat_400Regular,
  //     Montserrat_700Bold,
  //   });
  
  //   if (!fontsLoaded) {
  //     return <Text>Carregando...</Text>;
  //   }
  
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
          <Text style={styles.title}>Um futuro Mais seguro para você</Text>
        </View>
        <Text style={styles.subTitle}>Tendo previsibilidade financeira você garante uma vida muito mais tranquila e segura.</Text>


          <TouchableOpacity style={styles.boxButtom}>Teste</TouchableOpacity>

        <View style={styles.boxTextsLogin}>
          <Text style={styles.textLogin}>Já possui uma conta? </Text>
          <Text style={styles.textFazerLogin}>Fazer login</Text>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  )
}
