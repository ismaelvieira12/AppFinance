// PlanejamentoMensal.jsx
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  Alert,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { ColorGlobal } from "../../paletaColor/ColorGlobal";

export default function PlanejamentoMensal() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [renda, setRenda] = useState("");
  const [meta, setMeta] = useState("");
  const [porcentagemGuardar, setPorcentagemGuardar] = useState(20); // % inicial
  const [resultado, setResultado] = useState(null);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const toggleCalendar = () => setShowCalendar((s) => !s);

  const animarBarra = (toValue) => {
    Animated.timing(progressAnim, {
      toValue,
      duration: 400,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const alterarPorcentagem = (delta) => {
    setPorcentagemGuardar((prev) => {
      const next = Math.min(80, Math.max(5, prev + delta));
      animarBarra(next);
      return next;
    });
  };

  useEffect(() => {
    animarBarra(porcentagemGuardar);
  }, []);

  const calcularPlanejamento = () => {
    const rendaNum = parseFloat(renda.toString().replace(",", "."));
    const metaNum = parseFloat(meta.toString().replace(",", "."));

    if (isNaN(rendaNum) || isNaN(metaNum) || rendaNum <= 0 || metaNum <= 0) {
      setResultado(null);
      return Alert.alert("Atenção", "Por favor, preencha os valores corretamente!");
    }

    // Valida se o usuário está tentando guardar mais do que ganha
    if (metaNum <= rendaNum) {
      Alert.alert(
        "Meta muito baixa",
        "A meta deve ser maior que o valor da renda mensal para o cálculo fazer sentido."
      );
    }

    const valorMensalGuardar = (rendaNum * porcentagemGuardar) / 100;

    if (valorMensalGuardar <= 0 || !isFinite(valorMensalGuardar)) {
      return Alert.alert(
        "Erro",
        "O valor calculado para guardar é inválido. Verifique os números."
      );
    }

    const mesesNecessarios = Math.ceil(metaNum / valorMensalGuardar);

    if (!isFinite(mesesNecessarios) || mesesNecessarios <= 0) {
      return Alert.alert(
        "Erro de cálculo",
        "Os valores inseridos não são suficientes para calcular o planejamento."
      );
    }

    const progressoPercent =
      metaNum > 0 ? Math.min(100, (rendaNum / metaNum) * 100) : 0;

    setResultado({
      valorMensalGuardar,
      mesesNecessarios,
      progressoPercent,
    });
  };

  const barraWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      {/* Botão calendário */}
      <TouchableOpacity style={styles.btnToggle} onPress={toggleCalendar}>
        <Text style={styles.btnText}>
          {showCalendar ? "Fechar Calendário" : "Mostrar Calendário"}
        </Text>
      </TouchableOpacity>

      {/* Calendário (visível somente quando clicado) */}
      {showCalendar && (
        <View style={styles.calendarWrap}>
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
        </View>
      )}

      {/* Card principal */}
      <View style={styles.card}>
        <Text style={styles.title}>💰 Quanto você deseja alcançar?</Text>

        <TextInput
          placeholder="Quanto você ganha por mês?"
          placeholderTextColor={ColorGlobal.ColoFontSuave}
          keyboardType="numeric"
          value={renda}
          onChangeText={(t) => setRenda(t.replace(/[^0-9,\.]/g, ""))}
          style={styles.input}
        />

        <TextInput
          placeholder="Estipule um valor para ser alcançado"
          placeholderTextColor={ColorGlobal.ColoFontSuave}
          keyboardType="numeric"
          value={meta}
          onChangeText={(t) => setMeta(t.replace(/[^0-9,\.]/g, ""))}
          style={styles.input}
        />

        {/* Controle de porcentagem com botões +/- */}
        <View style={styles.pctRow}>
          <TouchableOpacity
            style={styles.pctBtn}
            onPress={() => alterarPorcentagem(-1)}
          >
            <Text style={styles.pctBtnText}>-</Text>
          </TouchableOpacity>

          <View style={styles.pctCenter}>
            <Text style={styles.pctLabel}>Guardar</Text>
            <Text style={styles.pctValue}>{porcentagemGuardar}%</Text>

            <View style={styles.progressBackground}>
              <Animated.View style={[styles.progressFill, { width: barraWidth }]} />
            </View>
          </View>

          <TouchableOpacity
            style={styles.pctBtn}
            onPress={() => alterarPorcentagem(1)}
          >
            <Text style={styles.pctBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnCalcular} onPress={calcularPlanejamento}>
          <Text style={styles.btnCalcularText}>Calcular</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={styles.resultadoBox}>
            <Text style={styles.resultadoText}>
              🏦 Meta:{" "}
              <Text style={styles.valor}>
                R$ {parseFloat(meta).toFixed(2).replace(".", ",")}
              </Text>
            </Text>

            <Text style={styles.resultadoText}>
              💾 Guardar por mês:{" "}
              <Text style={styles.valor}>
                R$ {resultado.valorMensalGuardar.toFixed(2).replace(".", ",")}
              </Text>
            </Text>

            <Text style={styles.resultadoText}>
              ⏳ Tempo estimado:{" "}
              <Text style={styles.valor}>
                {resultado.mesesNecessarios} meses
              </Text>
            </Text>

            <View style={{ height: 12 }} />

            <Text style={[styles.resultadoText, { marginTop: 8 }]}>
              Progresso (renda ÷ meta):{" "}
              <Text style={styles.valor}>
                {Math.min(100, resultado.progressoPercent).toFixed(1)}%
              </Text>
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

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorGlobal.FundoBody,
    alignItems: "center",
    paddingTop: 28,
  },
  btnToggle: {
    backgroundColor: ColorGlobal.AzulNormal,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 8,
  },
  btnText: { color: "#fff", fontSize: 15, fontWeight: "600" },
  calendarWrap: { width: "100%", marginBottom: 10, paddingHorizontal: 16 },
  calendar: { width: "100%", borderRadius: 10, backgroundColor: ColorGlobal.FundoCards },
  card: {
    width: "92%",
    backgroundColor: ColorGlobal.FundoCards,
    borderRadius: 14,
    padding: 16,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: ColorGlobal.AzulEscuro,
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    backgroundColor: ColorGlobal.fundoImag,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    fontSize: 16,
    color: ColorGlobal.ColoFontSuave,
  },
  pctRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  pctBtn: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: ColorGlobal.AzulEscuro,
    alignItems: "center",
    justifyContent: "center",
  },
  pctBtnText: { color: "#fff", fontSize: 22, fontWeight: "700" },
  pctCenter: { flex: 1, paddingHorizontal: 12 },
  pctLabel: {
    color: ColorGlobal.ColoFontSuave,
    fontSize: 13,
    textAlign: "center",
  },
  pctValue: {
    fontSize: 18,
    fontWeight: "700",
    color: ColorGlobal.AzulEscuro,
    textAlign: "center",
    marginTop: 4,
  },
  progressBackground: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 8,
  },
  progressFill: { height: 8, backgroundColor: ColorGlobal.AmareloNormal },
  btnCalcular: {
    marginTop: 12,
    backgroundColor: ColorGlobal.AmareloNormal,
    borderRadius: 10,
    paddingVertical: 10,
  },
  btnCalcularText: { textAlign: "center", color: "#333", fontWeight: "700" },
  resultadoBox: {
    marginTop: 14,
    padding: 12,
    backgroundColor: ColorGlobal.FundoBody,
    borderRadius: 10,
    alignItems: "center",
  },
  resultadoText: {
    color: ColorGlobal.ColoFontSuave,
    fontSize: 15,
    textAlign: "center",
  },
  valor: { color: ColorGlobal.AzulEscuro, fontWeight: "700" },
  bottomBox: { marginTop: 24, alignItems: "center" },
  titleCriar: { fontSize: 16, color: ColorGlobal.ColoFontSuave, marginBottom: 8 },
  btnCriar: {
    backgroundColor: ColorGlobal.AzulNormal,
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnCriarText: { color: "#fff", fontWeight: "700" },
});
