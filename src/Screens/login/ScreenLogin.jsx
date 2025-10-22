import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './ScreenLoginStyle';
import { ColorGlobal } from '../../paletaColor/ColorGlobal';

export const ScreenLogin = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          
          <View style={styles.boxImg}>
            {/* <Image
              source={require('../../../assets/imgs/segunda_foto_perfil.png')}
              style={styles.img}
            /> */}
          </View>

          {/* Campos de login */}
        <View style={{ width: '100%', paddingHorizontal: 20 }}>
              <TextInput placeholder="Email" style={styles.nputLogin} />
              <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.nputLogin}
              />

              {/* Botão */}
              <TouchableOpacity>
                <LinearGradient
                  colors={[ColorGlobal.AzulNormal, ColorGlobal.ColoFontSuave]}
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                  style={[styles.nputLogin, styles.btnBottomLogin]}
                >
                  <Text style={styles.textBtnLogin}>Fazer login</Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* Texto abaixo */}
              <Text style={{ textAlign: 'center', marginTop: 10 }}>
                Já possui uma conta? Faça login
              </Text>
            </View>

          <StatusBar barStyle="dark-content" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
