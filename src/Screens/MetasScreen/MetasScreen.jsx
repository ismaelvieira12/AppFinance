import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import { BackBtn } from '../../components/botaoBack/BackBtn';


export default function MetasScreen () {
  return (
    <ScrollView style={styles.container}>
        <BackBtn />
        <View style={styles.box1}>
            <Text style={styles.text}>METAS</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", backgroundColor: "#000" },
 box1: {
    backgroundColor: "red",
    height: 200,
 },
 text: {
    fontSize: 40,
    color: #fff
 }
});
