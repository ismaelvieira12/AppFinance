import { StyleSheet } from "react-native";
import { ColorGlobal } from "../../paletaColor/ColorGlobal";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorGlobal.TesteColor,
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
