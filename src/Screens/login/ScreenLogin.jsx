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
        <View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 40}}>
          
          
          <View style={styles.boxImg}>
            <Image
              source={require('../../../assets/imgs/segunda_foto_perfil.png')}
              style={styles.img}
            />
          </View>

          {/* Campos de login */}
          <View>
              <TextInput placeholder="Email" style={styles.nputLogin} />
              <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.nputLogin}
              />

              {/* Botão */}
              <TouchableOpacity>
                <LinearGradient
                  colors={[ColorGlobal.AzulNormal, ColorGlobal.ColoBtnGradient]}
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                  style={[styles.nputLogin, styles.btnBottomLogin]}
                >
                  <Text style={styles.textBtnLogin}>Fazer login</Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* Texto abaixo */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{fontSize: 16}}>Ainda não possui uma conta? </Text>
                <TouchableOpacity>
                  <Text style={{ color: ColorGlobal.AzulMaisClaro, fontWeight: 'bold',fontSize: 16 }}>
                    Cadastre-se
                  </Text>
                </TouchableOpacity>
              </View>
          </View>

          <StatusBar barStyle="dark-content" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
