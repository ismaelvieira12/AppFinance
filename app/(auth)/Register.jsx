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
// import { LinearGradient } from 'expo-linear-gradient';
// import { styles } from '../../src/Screens/register/ScreenRegisterStyle';
// import { ColorGlobal } from '../../src/paletaColor/ColorGlobal';

// import { BackBtn } from '../../src/components/botaoBack/BackBtn';
import React from 'react'

export default function Register () {
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
              source={require('../../assets/imgs/perfilRegister.png')}
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
              <TouchableOpacity>
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
}


// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Platform,
//   StatusBar,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { styles } from '../../src/Screens/register/ScreenRegisterStyle';
// import { ColorGlobal } from '../../src/paletaColor/ColorGlobal';

// import { BackBtn } from '../../src/components/botaoBack/BackBtn';

// export default function Register ()  {

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//         <BackBtn />
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View
//           style={{
//             flex: 1,
//             width: '100%',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: 40,
//           }}
//         >
//           {/* Imagem */}
//           <View style={styles.boxImg}>
//             <Image
//               source={require('../../assets/imgs/register.png')}
//               style={styles.img}
//             />
//           </View>

//           {/* Campos de cadastro */}
//           <View>
//             <TextInput placeholder="Nome completo" style={styles.nputLogin} />
//             <TextInput
//               placeholder="Email"
//               keyboardType="email-address"
//               style={styles.nputLogin}
//             />
//             <TextInput
//               placeholder="Senha"
//               secureTextEntry
//               style={styles.nputLogin}
//             />
//             <TextInput
//               placeholder="Confirmar senha"
//               secureTextEntry
//               style={styles.nputLogin}
//             />

//             {/* Botão de criar conta */}
//             <TouchableOpacity>
//               <LinearGradient
//                 colors={[ColorGlobal.AzulNormal, ColorGlobal.ColoBtnGradient]}
//                 start={{ x: 1, y: 0.5 }}
//                 end={{ x: 0, y: 0.5 }}
//                 style={[styles.nputLogin, styles.btnBottomLogin]}
//               >
//                 <Text style={styles.textBtnLogin}>Cadastrar</Text>
//               </LinearGradient>
//             </TouchableOpacity>

//             {/* Texto de navegação */}
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 marginTop: 10,
//               }}
//             >
//               <Text style={{ fontSize: 16 }}>Já possui uma conta? </Text>
//               <TouchableOpacity>
//                 <Text
//                   style={{
//                     color: ColorGlobal.AzulMaisClaro,
//                     fontWeight: 'bold',
//                     fontSize: 16,
//                   }}
//                 >
//                   Faça login
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <StatusBar barStyle="dark-content" />
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };
