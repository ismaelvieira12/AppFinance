import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.text}>Testando</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  text: { fontSize: 30 }
})