
import React from 'react'
import { TouchableOpacity } from 'react-native';

export const BackBtn = () => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={32} color={ColorGlobal.AzulMaisClaro} />
    </TouchableOpacity>
  )
}

const styles = {
    backBtn: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
    },
}