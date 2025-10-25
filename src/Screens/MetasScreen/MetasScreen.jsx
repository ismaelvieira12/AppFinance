import { View, Text } from 'react-native'
import { styles } from './MetasScreenStyle'
import { StatusBar } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Waves } from '../../components/onda/Wave'

export  const MetasScreen = () => {
  return (
    <LinearGradient style={styles.container}>
      <Text style={styles.TextMetas}>METAS</Text>
      <StatusBar barStyle="dark-content" />

      <Waves color={"#FCA3A3"}/>
    </LinearGradient>
  )
}
