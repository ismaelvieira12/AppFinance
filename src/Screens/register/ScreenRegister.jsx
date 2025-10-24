import { View, Text } from 'react-native'
import React from 'react'
import { ColorGlobal } from '../../paletaColor/ColorGlobal'

export const ScreenRegister = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 56, color: ColorGlobal.AmareloNormal}}>ScreenRegister</Text>
    </View>
  )
}

