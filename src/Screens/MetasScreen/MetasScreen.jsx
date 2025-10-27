import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Waves} from "../../components/onda/Waves.jsx";
import { BackBtn } from '../../components/botaoBack/BackBtn';


export default function LoginScreen() {
  return (
    <LinearGradient
      colors={["#0A1D3F", "#102A5C"]}
      style={styles.container}
    >
      <BackBtn />
      <View style={styles.form}>
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#ccc" />
        <TextInput placeholder="Senha" secureTextEntry style={styles.input} placeholderTextColor="#ccc" />
      </View>
        <Waves />

      
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}> 
      </View>    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  form: { marginBottom: 150 },
  input: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    color: "#fff",
  },
});
