import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7f7f7',

    },
    headerGradient: {
       width: '100%',
       height: "35%",
       padding: 20,
       borderBottomLeftRadius: 85,
       borderBottomRightRadius: 85,
    },
    txtWellcome: {
        color: 'white', 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginTop: 20,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 20
    },
    txtDescritionWellcome: {
        color: 'white', 
        fontSize: 18, 
        marginTop: 5,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 20
    },
    containerGrafico: {
        width: '80%',
        height: 300,
        backgroundColor: '#fff',
        marginTop: -60,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        padding: 20,
    },
    textSaldo: {
        fontSize: 15,
        color: '#5c5c5cff',
        fontFamily: 'Montserrat_400Regular',
    },
    valueSaldo: {
        fontSize: 25,
        fontWeight: 'bold', 
        color: '#4fa4f5ff',
        marginTop: 5,
        fontFamily: 'Montserrat_700Bold',
    },
    boxOraganization: {
        width: '80%',
        height: 100,
        borderRadius: 20,
        marginTop: 20,
        padding: 20,
        justifyContent: 'center',
    },
    textOrganization: {
        color: 'white',
        fontSize: 18,
        lineHeight: 30, 
        fontFamily: 'Montserrat_400Regular',
    }

})