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
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  boxReceitas: {
    width: 100,
    height: 30,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  boxDespesas: {
    width: 100,
    height: 30,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  textValueRD: {
    color:ColorGlobal.TesteColor,
    fontSize: 15,
    fontWeight: "bold",
  },
  ValueRD: {
    color:ColorGlobal.TesteColor,
    fontSize: 15,
    fontWeight: "bold",
  },
  
  label: { color: ColorGlobal.FundoCards, fontSize: 20 },
  saldo: { color: ColorGlobal.FundoCards, fontSize: 26, fontWeight: "bold", textAlign:"center" },
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

  saldoBox: {
  backgroundColor: ColorGlobal.AzulNormal,
  paddingVertical: 18,
  borderRadius: 14,
  width: "100%",
  alignItems: "center",
  marginBottom: 18,
  elevation: 3,
},

saldoTitulo: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},

saldoValor: {
  color: "#fff",
  fontSize: 28,
  fontWeight: "bold",
  marginTop: 4,
},

rowRD: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
},

boxReceitas: {
  backgroundColor: "#4CAF50",
  width: "35%",
  padding: 14,
  borderRadius: 12,
  alignItems: "center",
  elevation: 2,
},

boxDespesas: {
  backgroundColor: "#E53935",
  width: "35%",
  padding: 14,
  borderRadius: 12,
  alignItems: "center",
  elevation: 2,
},

labelRD: {
  color: "#fff",
  fontSize: 15,
  fontWeight: "600",
},

valorRD: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 4,
},

});
