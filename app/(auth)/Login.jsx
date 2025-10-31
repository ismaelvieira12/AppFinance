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
    ImageBackground,
  } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  import { styles } from '../../src/Screens/login/ScreenLoginStyle';
  import { ColorGlobal } from '../../src/paletaColor/ColorGlobal'; 
//   import { useNavigation } from '@react-navigation/native';
  import { BackBtn } from '../../src/components/botaoBack/BackBtn.jsx';

export default function Login ()  {
    return (
        <View>
            
            <Text>Login Screen</Text>
        </View>
    );
}