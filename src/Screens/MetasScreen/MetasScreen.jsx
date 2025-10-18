import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './MetasScreenStyle'
import { StatusBar, Image } from 'react-native'
import React from 'react'

export const MetasScreen = () => {
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

        <View style={styles.boxButtom}>
          <TouchableOpacity>Criar uma conta</TouchableOpacity>
        </View>

        <View style={styles.boxTextsLogin}>
          <Text style={styles.textLogin}>Já possui uma conta? </Text>
          <Text style={styles.textFazerLogin}>Fazer login</Text>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  )
}
