import { Text, TextInput, View } from 'react-native'
import { styles } from './ScreenLoginStyle'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export const ScreenLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>ScreenLogin</Text>
      <View>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Senha' />
        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
