import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { ColorGlobal } from "../../paletaColor/ColorGlobal"; // ajuste o caminho conforme sua pasta

export default function PlanejamentoScreen() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [renda, setRenda] = useState("");
  const [metaGuardar, setMetaGuardar] = useState("");
  const [resultado, setResultado] = useState(null);

  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    Animated.timing(fadeAnim, {
      toValue: showCalendar ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const calcularPlanejamento = () => {
    const rendaNum = parseFloat(renda);
    const guardarNum = parseFloat(metaGuardar);

    if (isNaN(rendaNum) || isNaN(guardarNum) || rendaNum <= 0) {
      setResultado(null);
      return alert("Por favor, preencha os valores corretamente!");
    }

    if (guardarNum > rendaNum) {
      return alert("Você não pode guardar mais do que ganha 😅");
    }

    const podeGastar = rendaNum - guardarNum;
    const porcentagemGuardar = ((guardarNum / rendaNum) * 100).toFixed(1);
    const porcentagemGastar = ((podeGastar / rendaNum) * 100).toFixed(1);

    setResultado({
      podeGastar,
      porcentagemGuardar,
      porcentagemGastar,
    });
  };

  return (
    <View style={styles.container}>
      {/* Botão para mostrar/esconder o calendário */}
      <TouchableOpacity style={styles.btnToggle} onPress={toggleCalendar}>
        <Text style={styles.btnText}>
          {showCalendar ? "Fechar Calendário" : "Mostrar Calendário"}
        </Text>
      </TouchableOpacity>

      {/* Calendário animado */}
      {showCalendar && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Calendar
            style={styles.calendar}
            theme={{
              backgroundColor: ColorGlobal.FundoCards,
              calendarBackground: ColorGlobal.FundoCards,
              todayTextColor: ColorGlobal.AzulNormal,
              dayTextColor: ColorGlobal.ColoFontSuave,
              arrowColor: ColorGlobal.AzulNormal,
              monthTextColor: ColorGlobal.AzulNormal,
            }}
          />
        </Animated.View>
      )}

      {/* Entrada de dados */}
      <View style={styles.card}>
        <Text style={styles.title}>💰 Planejamento Mensal</Text>

        <TextInput
          placeholder="Quanto você ganha por mês?"
          placeholderTextColor={ColorGlobal.ColoFontSuave}
          keyboardType="numeric"
          value={renda}
          onChangeText={setRenda}
          style={styles.input}
        />

        <TextInput
          placeholder="Quanto deseja guardar?"
          placeholderTextColor={ColorGlobal.ColoFontSuave}
          keyboardType="numeric"
          value={metaGuardar}
          onChangeText={setMetaGuardar}
          style={styles.input}
        />

        <TouchableOpacity style={styles.btnCalcular} onPress={calcularPlanejamento}>
          <Text style={styles.btnCalcularText}>Calcular</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={styles.resultadoBox}>
            <Text style={styles.resultadoText}>
              💸 Você pode gastar até:{" "}
              <Text style={styles.valor}>
                R$ {resultado.podeGastar.toFixed(2).replace(".", ",")}
              </Text>
            </Text>

            <View style={styles.barraProgresso}>
              <View
                style={[
                  styles.parteGastar,
                  { width: `${resultado.porcentagemGastar}%` },
                ]}
              />
              <View
                style={[
                  styles.parteGuardar,
                  { width: `${resultado.porcentagemGuardar}%` },
                ]}
              />
            </View>

            <Text style={styles.info}>
              💼 Guardar: {resultado.porcentagemGuardar}% | Gastar:{" "}
              {resultado.porcentagemGastar}%
            </Text>
          </View>
        )}
      </View>

      {/* Criar planejamento */}
      <View style={styles.bottomBox}>
        <Text style={styles.titleCriar}>Criar um planejamento??</Text>
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
    backgroundColor: ColorGlobal.FundoBody,
    alignItems: "center",
    paddingTop: 40,
  },
  btnToggle: {
    backgroundColor: ColorGlobal.AzulNormal,
    paddingVertical: 10,
    paddingHorizontal: 25,
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
    width: 330,
    marginBottom: 20,
  },
  card: {
    backgroundColor: ColorGlobal.FundoCards,
    width: "90%",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: ColorGlobal.AzulEscuro,
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    backgroundColor: ColorGlobal.fundoImag,
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    fontSize: 16,
    color: ColorGlobal.ColoFontSuave,
  },
  btnCalcular: {
    backgroundColor: ColorGlobal.AmareloNormal,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  btnCalcularText: {
    textAlign: "center",
    color: "#333",
    fontWeight: "700",
    fontSize: 16,
  },
  resultadoBox: {
    marginTop: 20,
    backgroundColor: ColorGlobal.FundoBody,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  resultadoText: {
    fontSize: 16,
    textAlign: "center",
    color: ColorGlobal.ColoFontSuave,
    marginBottom: 8,
  },
  valor: {
    color: ColorGlobal.AzulEscuro,
    fontWeight: "bold",
  },
  barraProgresso: {
    flexDirection: "row",
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  parteGastar: {
    backgroundColor: ColorGlobal.AzulMaisClaro,
  },
  parteGuardar: {
    backgroundColor: ColorGlobal.LaranjaEscuro,
  },
  info: {
    textAlign: "center",
    color: ColorGlobal.ColoFontSuave,
    fontSize: 14,
  },
  bottomBox: {
    marginTop: 40,
    alignItems: "center",
  },
  titleCriar: {
    fontSize: 18,
    color: ColorGlobal.ColoFontSuave,
    marginBottom: 10,
  },
  btnCriar: {
    backgroundColor: ColorGlobal.AzulNormal,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnCriarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
