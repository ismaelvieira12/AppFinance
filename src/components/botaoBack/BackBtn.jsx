
import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ColorGlobal } from '../../paletaColor/ColorGlobal';
import { View } from 'react-native-web';


export const BackBtn = () => {
    const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.box1}
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
    box1: {
      
    }
};