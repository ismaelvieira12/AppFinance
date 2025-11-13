import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./MetasScreenStyle";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { ColorGlobal } from "../../paletaColor/ColorGlobal";
import { useNavigation } from "@react-navigation/native";
export default function MetasScreen() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [transacoes, setTransacoes] = useState([]);

  // 🔹 Carrega as transações ao abrir a tela
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await AsyncStorage.getItem("@transacoes");
        if (dados) setTransacoes(JSON.parse(dados));
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    };
    carregarDados();
  }, []);

  // 🔹 Salva as transações sempre que houver mudança
  useEffect(() => {
    const salvarDados = async () => {
      try {
        await AsyncStorage.setItem("@transacoes", JSON.stringify(transacoes));
      } catch (error) {
        console.log("Erro ao salvar dados:", error);
      }
    };
    salvarDados();
  }, [transacoes]);

  const handleValorChange = (text) => {
    const numeroValido = text.replace(/[^0-9.,]/g, "");
    setValor(numeroValido.replace(",", "."));
  };

  const adicionarTransacao = () => {
    if (!descricao || !valor || isNaN(valor)) {
      Alert.alert("Erro", "Preencha todos os campos corretamente!");
      return;
    }

    const nova = {
      id: Date.now().toString(),
      descricao,
      valor: parseFloat(valor),
      tipo,
    };

    setTransacoes([...transacoes, nova]);
    setDescricao("");
    setValor("");
  };

  const calcularSaldo = () => {
    const receitas = transacoes
      .filter((t) => t.tipo === "receita")
      .reduce((acc, t) => acc + t.valor, 0);

    const despesas = transacoes
      .filter((t) => t.tipo === "despesa")
      .reduce((acc, t) => acc + t.valor, 0);

    return receitas - despesas;
  };

  const limparTudo = async () => {
    Alert.alert("Limpar tudo?", "Isso apagará todas as transações!", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Apagar",
        onPress: async () => {
          try {
            // Remove os dados do AsyncStorage
            await AsyncStorage.removeItem("@transacoes");

            // Limpa o estado imediatamente
            setTransacoes([]);

            // Confirma se o AsyncStorage foi limpo
            const dadosVerificados = await AsyncStorage.getItem("@transacoes");
            if (dadosVerificados === null) {
              Alert.alert("Sucesso", "Todas as transações foram apagadas!");
            } else {
              Alert.alert(
                "Atenção",
                "Ocorreu um problema ao limpar as transações. Tente novamente."
              );
            }
          } catch (error) {
            console.log("Erro ao limpar dados:", error);
            Alert.alert("Erro", "Não foi possível apagar as transações.");
          }
        },
      },
    ]);
  };

  const navigator = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.boxSaldo}>
        <View style={{paddingVertical: 10}}>
          <Text style={styles.label}>Saldo Atual:</Text>
          <Text style={styles.saldo}>
            R$ {calcularSaldo().toFixed(2).replace(".", ",")}
          </Text>
          <TouchableOpacity onPress={() => navigator.navigate("PlanejamentoMensal")}>
            <MaterialCommunityIcons name="chart-line" size={40} color={ColorGlobal.FundoCards}  />
          </TouchableOpacity>
        </View>

        <View>
          <View></View>          
        </View>
        
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        {/* Inputs */}
        <TextInput
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          style={styles.input}
        />

        <TextInput
          placeholder="Valor"
          value={valor}
          onChangeText={handleValorChange}
          keyboardType="numeric"
          style={styles.input}
        />

        <View style={styles.tipoContainer}>
          <TouchableOpacity
            style={[styles.btnTipo, tipo === "receita" && styles.btnSelecionado]}
            onPress={() => setTipo("receita")}
          >
            <Text style={styles.textBtn}>Receita</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnTipo, tipo === "despesa" && styles.btnSelecionado]}
            onPress={() => setTipo("despesa")}
          >
            <Text style={styles.textBtn}>Despesa</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnAdd} onPress={adicionarTransacao}>
          <Text style={styles.btnAddText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnAdd, { backgroundColor: "#E53935", marginTop: 10 }]}
          onPress={limparTudo}
        >
          <Text style={styles.btnAddText}>🗑️ Limpar Tudo</Text>
        </TouchableOpacity>

        {/* Lista */}
        <FlatList
          data={transacoes}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.item,
                {
                  borderLeftColor:
                    item.tipo === "receita" ? "#4CAF50" : "#E53935",
                },
              ]}
            >
              <Text style={styles.desc}>{item.descricao}</Text>
              <Text
                style={[
                  styles.valor,
                  { color: item.tipo === "receita" ? "#4CAF50" : "#E53935" },
                ]}
              >
                {item.tipo === "despesa" ? "-" : "+"} R${" "}
                {item.valor.toFixed(2).replace(".", ",")}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
