import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native" ;
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./MetasScreenStyle";

export default function MetasScreen() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [transacoes, setTransacoes] = useState([]);

  const handleValorChange = (text) => {
    // Permite apenas números e ponto (para casas decimais)
    const numeroValido = text.replace(/[^0-9.,]/g, "");

    // Substitui vírgula por ponto para facilitar o parseFloat
    setValor(numeroValido.replace(",", "."));
  };

  const adicionarTransacao = () => {
    if (!descricao || !valor || isNaN(valor)) return;

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
  );
}
