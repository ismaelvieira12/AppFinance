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
import { styles } from './ScreenRegisterStyle';
import { ColorGlobal } from '../../paletaColor/ColorGlobal';
import { useNavigation } from '@react-navigation/native';
import { BackBtn } from '../../components/botaoBack/BackBtn';

export const ScreenRegister = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
        <BackBtn />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
          }}
        >
          {/* Imagem */}
          <View style={styles.boxImg}>
            <Image
              source={require('../../../assets/imgs/perfilRegister.png')}
              style={styles.img}
            />
          </View>

          {/* Campos de cadastro */}
          <View>
            <TextInput placeholder="Nome completo" style={styles.nputLogin} />
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              style={styles.nputLogin}
            />
            <TextInput
              placeholder="Senha"
              secureTextEntry
              style={styles.nputLogin}
            />
            <TextInput
              placeholder="Confirmar senha"
              secureTextEntry
              style={styles.nputLogin}
            />

            {/* Botão de criar conta */}
            <TouchableOpacity>
              <LinearGradient
                colors={[ColorGlobal.AzulNormal, ColorGlobal.ColoBtnGradient]}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={[styles.nputLogin, styles.btnBottomLogin]}
              >
                <Text style={styles.textBtnLogin}>Cadastrar</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Texto de navegação */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>Já possui uma conta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: ColorGlobal.AzulMaisClaro,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  Faça login
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
