import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StatusBar, Image, Text } from 'react-native'
import { styles } from '../src/Screens/StartConfigInitial/StartConfigInitialStyle'
import { LinearGradient } from 'expo-linear-gradient';
import { ColorGlobal } from '../src/paletaColor/ColorGlobal';
import { Link } from 'expo-router';
export default function StartConfigInitial() {

  return (
   <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          source={require('../assets/imgs/imagem-inicialPNG03.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.boxInfor}>
        <View>
          <Text style={styles.title}>Um futuro mais seguro para você</Text>
        </View>
        <Text style={styles.subTitle}>Tendo previsibilidade financeira você garante uma vida muito mais tranquila e segura.</Text>
      </View>

      <View style={styles.boxLogin}>
        
          <LinearGradient
            colors={[ColorGlobal.AzulNormal, ColorGlobal.ColoBtnGradient]}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            style={styles.btnGradient}
          >
            <Link href="/Wellcome">
              <TouchableOpacity><Text style={styles.textBtn}>Criar uma conta</Text></TouchableOpacity>
            </Link>
          </LinearGradient>
        
        <View style={styles.boxTextsLogin}>
          <Text style={styles.textLogin}>Já tem uma conta? </Text>
          <TouchableOpacity><Text style={styles.textFazerLogin}>Fazer login</Text></TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};
