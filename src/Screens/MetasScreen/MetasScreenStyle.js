import { ColorGlobal } from "../../paletaColor/ColorGlobal";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorGlobal.FundoCards,
        justifyContent: "center",
        alignItems:"center"
    },
    TextMetas:{
        fontSize: 40,
        color: ColorGlobal.LaranjaEscuro,
        fontWeight: "bold"
    }
})