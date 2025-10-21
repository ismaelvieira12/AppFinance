import { Image, Text, TextInput, View } from 'react-native'
import { styles } from './ScreenLoginStyle'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export const ScreenLogin = () => {
  return (
      <View style={styles.container}>
        <Image  source={require('../../../assets/imgs/perfil.png')} style={styles.img}/>
      <Text style={styles.textLogin}>ScreenLogin</Text>
      <View>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Senha' />
        <TouchableOpacity>
          <Text>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
