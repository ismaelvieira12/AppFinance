import { View, Text, ScrollView } from 'react-native'
import React from 'react'


export default function MetasScreen() {
  return (
    <ScrollView>
      <View style={styles.container}></View>
      <Text>MetasScreen</Text>
    </ScrollView>
  )
}

const styles = {
  container: {
    backgrounfColor: '#FA4000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300',
    weidth: 300,
  },
}
