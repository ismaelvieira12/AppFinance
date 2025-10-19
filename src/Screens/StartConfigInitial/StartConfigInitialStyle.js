import { ColorGlobal } from "../../paletaColor/ColorGlobal";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorGlobal.FundoCards,
    },
    boxImage: {
        backgroundColor: ColorGlobal.fundoImag,
        height: "55%",
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
    },
    boxLogin: {
        position: "absolute",
        width: '100%',
        bottom: 0,
        padding: 20
    },
    boxButtom: {
        marginTop: 20,
        backgroundColor: ColorGlobal.AzulNormal,
        padding: 20,
        borderRadius: 8,
        width: "100%"
    },
    textBtn: {
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
    },
    boxTextsLogin:{
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        
        padding: 10,
        marginBottom: 15        
    },
    textLogin: {
        fontSize: 17,
        color: ColorGlobal.ColoFontSuave,
    },
    textFazerLogin:{
        fontSize: 17,
        color: ColorGlobal.AzulNormal,
        fontWeight: "bold"
    }

})