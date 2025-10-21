import { Image, Text, TextInput, View } from 'react-native'
import { styles } from './ScreenLoginStyle'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export const ScreenLogin = () => {
  return (
      <View style={styles.container}>
        <Image  source={require('../../../assets/imgs/perfil.png')} style={styles.img}/>
      <View>
        <TextInput placeholder='Email' style={styles.nputLogin}/>
        <TextInput placeholder='Senha' style={styles.nputLogin}/>
        <TouchableOpacity style={[styles.nputLogin, styles.btnBottomLogin]}>
          <Text style={styles.textBtnLogin}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
