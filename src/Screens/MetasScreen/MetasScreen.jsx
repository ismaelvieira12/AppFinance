import { View, Text } from 'react-native'
import { styles } from './MetasScreenStyle'
import { StatusBar } from 'react-native'
import React from 'react'

export  const MetasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextMetas}>METAS</Text>
      <StatusBar barStyle="dark-content" />
    </View>
  )
}
