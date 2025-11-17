import { StyleSheet } from "react-native";
import {ColorGlobal} from '../../paletaColor/ColorGlobal'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: ColorGlobal.TesteColor,
    },
    textLogin: {
        fontSize: 50,
    },
    boxImg: {
        width: "100%",
        height: 360,
        
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    nputLogin: {
        width: 350,
        height: 50,  
        borderRadius: 40,
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 18,
        backgroundColor: ColorGlobal.FundoCards,
    },
    btnBottomLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorGlobal.LaranjaEscuro,
        height: 50,
        marginTop: 10,
    },
    textBtnLogin: {
        color: ColorGlobal.FundoCards,
        fontSize: 20,
        fontWeight: 'bold',
    }  
})