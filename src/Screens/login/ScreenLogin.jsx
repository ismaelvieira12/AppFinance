import { Text, View } from 'react-native'
import { styles } from './ScreenLoginStyle'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export const ScreenLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>ScreenLogin</Text>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  )
}
