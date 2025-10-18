import { ColorGlobal } from "../../paletaColor/ColorGlobal";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorGlobal.FundoCards,
    },
    boxImage: {
        backgroundColor: ColorGlobal.FundoBody,
        height: "60%",
        borderBottomEndRadius: 70,
        borderBottomLeftRadius: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        
        height: '100%'
    }
})