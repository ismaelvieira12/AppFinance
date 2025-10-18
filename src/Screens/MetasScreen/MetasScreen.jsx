import { View } from 'react-native'
import { styles } from './MetasScreenStyle'
import { StatusBar } from 'react-native'
import React from 'react'

export const MetasScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}></View>
      <StatusBar barStyle={'dark-content'}/>
    </View>
  )
}
