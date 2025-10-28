import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'expo-router'
const index = () => {
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>Index</Text>
      <Link href="">Ir para StartConfigInitial</Link>
    </View>
  )
}

export default index
