import React from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BackBtn } from '../../components/botaoBack/BackBtn';


export default function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
        <BackBtn />
        <View>
            
        </View>
    </ScrollView>
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
