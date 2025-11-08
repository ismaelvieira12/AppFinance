import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

export const PlanejamentoScreen = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botão para mostrar/esconder o calendário */}
      <TouchableOpacity
        style={styles.btnToggle}
        onPress={() => setShowCalendar(!showCalendar)}
      >
        <Text style={styles.btnText}>
          {showCalendar ? "Fechar Calendário" : "Mostrar Calendário"}
        </Text>
      </TouchableOpacity>

      
      {showCalendar && (
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: "#fff",
            calendarBackground: "#fff",
            textSectionTitleColor: "#000",
            todayTextColor: "#037df0",
            dayTextColor: "#000",
            arrowColor: "#037df0",
            monthTextColor: "#037df0",
          }}
        />
      )}

      {/* Parte central */}
      <View style={styles.centerView}>
        <Text style={styles.title}>Criar um planejamento??</Text>
        <TouchableOpacity
          style={styles.btnCriar}
          onPress={() => navigation.navigate("Metas")}
        >
          <Text style={styles.btnCriarText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // modo light
    alignItems: "center",
    paddingTop: 60,
  },
  btnToggle: {
    backgroundColor: "#037df0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  calendar: {
    borderRadius: 12,
    elevation: 2,
    width: "90%",
    marginBottom: 30,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  btnCriar: {
    backgroundColor: "#037df0",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 2,
  },
  btnCriarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
