import { ColorGlobal } from "../../paletaColor/ColorGlobal";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorGlobal.FundoBody,
    },
    boxImage: {
        backgroundColor: ColorGlobal.FundoCards,
        height: "40%",
        borderBottomEndRadius: 70,
        borderBottomLeftRadius: 70
    }
})