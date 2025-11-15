import { StyleSheet } from "react-native";
import { ColorGlobal } from "../../paletaColor/ColorGlobal";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorGlobal.TesteColor,
    // padding: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: ColorGlobal.AzulEscuro,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "justify",
  },
  boxSaldo: {
    backgroundColor: ColorGlobal.AzulNormal,
    padding: 15,
    height: 200,
    borderRadius: 25,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  boxReceitas: {
    // backgroundColor: ColorGlobal.LaranjaEscuro,
    width: 100,
    height: 30,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  boxDespesas: {
    // backgroundColor: ColorGlobal.LaranjaEscuro,
    width: 100,
    height: 30,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  textValueRD: {
    color:ColorGlobal.AmareloNormal,
    fontSize: 15,
    fontWeight: "bold"
  },
  
  label: { color: ColorGlobal.FundoCards, fontSize: 16 },
  saldo: { color: ColorGlobal.FundoCards, fontSize: 26, fontWeight: "bold" },
  input: {
    backgroundColor: ColorGlobal.FundoCards,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  tipoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  btnTipo: {
    backgroundColor: ColorGlobal.corBtnMetasReceitaNormal,
    padding: 10,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  btnSelecionado: {
    backgroundColor: ColorGlobal.btnSelecionado,
  },
  textBtn: {
    color: ColorGlobal.FundoCards,
    fontWeight: "bold",
  },
  btnAdd: {
    backgroundColor: ColorGlobal.btnAdd,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnAddText: {
    color: ColorGlobal.FundoCards,
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: ColorGlobal.FundoCards,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 6,
  },
  desc: { fontSize: 16, color: ColorGlobal.descTask },
  valor: { fontSize: 16, fontWeight: "bold" },
});
