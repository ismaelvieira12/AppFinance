import React from 'react'
import { View, Text } from 'react-native'
import App from './App'
import { useNavigation } from '@react-navigation/native';
const index = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:40}}>index</Text>
    </View>
  )
}

export default index
