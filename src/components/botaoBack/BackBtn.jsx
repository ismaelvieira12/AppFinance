
import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ColorGlobal } from '../../paletaColor/ColorGlobal';


export const BackBtn = () => {
    const navigation = useNavigation();
  return (
    <ScrollView>
     
    </ScrollView>
  )
}

const styles = {
    backBtn: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
    },
};