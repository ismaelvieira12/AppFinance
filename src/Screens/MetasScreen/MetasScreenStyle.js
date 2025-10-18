import { ColorGlobal } from "../../paletaColor/ColorGlobal";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorGlobal.FundoCards,
    },
    boxImage: {
        backgroundColor: ColorGlobal.fundoImag,
        height: "50%",
        borderBottomEndRadius: 90,
        borderBottomLeftRadius: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        
        height: '100%'
    },
    boxInfor:{
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: ColorGlobal.ColoFontSuave,
        marginBottom: 25,
        marginTop: 15
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center'
    }

})