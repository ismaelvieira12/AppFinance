import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function MetasScreen() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita"); // "receita" ou "despesa"
  const [transacoes, setTransacoes] = useState([]);

  const adicionarTransacao = () => {
    if (!descricao || !valor) return;

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
      .filter(t => t.tipo === "receita")
      .reduce((acc, t) => acc + t.valor, 0);
    const despesas = transacoes
      .filter(t => t.tipo === "despesa")
      .reduce((acc, t) => acc + t.valor, 0);
    return receitas - despesas;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💰 Minhas Metas Financeiras</Text>

      <View style={styles.boxSaldo}>
        <Text style={styles.label}>Saldo Atual:</Text>
        <Text style={styles.saldo}>
          R$ {calcularSaldo().toFixed(2).replace(".", ",")}
        </Text>
      </View>

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
        onChangeText={setValor}
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

      {/* Lista */}
      <FlatList
        data={transacoes}
        keyExtractor={item => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              { borderLeftColor: item.tipo === "receita" ? "#4CAF50" : "#E53935" },
            ]}
          >
            <Text style={styles.desc}>{item.descricao}</Text>
            <Text
              style={[
                styles.valor,
                { color: item.tipo === "receita" ? "#4CAF50" : "#E53935" },
              ]}
            >
              {item.tipo === "despesa" ? "-" : "+"} R$ {item.valor.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1D3F",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  boxSaldo: {
    backgroundColor: "#102A5C",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  label: { color: "#aaa", fontSize: 16 },
  saldo: { color: "#fff", fontSize: 26, fontWeight: "bold" },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  tipoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  btnTipo: {
    backgroundColor: "#102A5C",
    padding: 10,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  btnSelecionado: {
    backgroundColor: "#1C3C8D",
  },
  textBtn: {
    color: "#fff",
    fontWeight: "bold",
  },
  btnAdd: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnAddText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 6,
  },
  desc: { fontSize: 16, color: "#333" },
  valor: { fontSize: 16, fontWeight: "bold" },
});
