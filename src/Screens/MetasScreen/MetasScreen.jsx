import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export const MetasScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MetasScreen</Text>
      <TouchableOpacity>
        <Text>Pagina config</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F40"
    }
})