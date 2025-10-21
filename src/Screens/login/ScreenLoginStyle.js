import { StyleSheet } from "react-native";
import {ColorGlobal} from '../../paletaColor/ColorGlobal'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: ColorGlobal.FundoCards
    },
    textLogin: {
        fontSize: 50
    },
    img: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 100,


    }
})