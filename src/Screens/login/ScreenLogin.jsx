import { Image, StatusBar, Text, TextInput, View } from 'react-native'
import { styles } from './ScreenLoginStyle'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export const ScreenLogin = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxImg}>
            <Image  source={require('../../../assets/imgs/segunda_foto_perfil.png')} style={styles.img}/>
        </View>
      <View>
        <TextInput placeholder='Email' style={styles.nputLogin}/>
        <TextInput placeholder='Senha' style={styles.nputLogin}/>
        <TouchableOpacity style={[styles.nputLogin, styles.btnBottomLogin]}>
          <Text style={styles.textBtnLogin}>Criar conta</Text>
        </TouchableOpacity>
        <View>
            <Text style={{textAlign: 'center', marginTop: 10}}>Já possui uma conta? Faça login</Text>
        </View>
      </View>
      <StatusBar barStyle="dark-content"/>
    </View>
  )
}
