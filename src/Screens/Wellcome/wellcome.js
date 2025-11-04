import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',

    },
    headerGradient: {
       width: '100%',
       height: "13%",
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
        marginTop: -60,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width:"80%"
    },
    chartContainer: {
        margin: 'auto',
        overflow: 'hidden', // 👈 evita o gráfico ultrapassar
    },
    textSaldo: {
        fontSize: 19,
        color: '#717070ff',
        fontFamily: 'Montserrat_400Regular',
    },
    valueSaldo: {
        fontSize: 30,
        fontWeight: 'bold', 
        color: '#4fa4f5ff',
        marginTop: 5,
        fontFamily: 'Montserrat_700Bold',
    },

    gradientOrganization: {
        width: '80%',
        height: 100,
        borderRadius: 20,
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 10,
    },
    efeitoOne: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        left: -20, 
        borderRadius: 75,
        opacity: 0.5,
        zIndex: 0,
    },
    efeitoThree: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: -50,
        left: -50, 
        borderRadius: 75,
        opacity: 0.5,
        zIndex: 0,
    },
    textOrganization: {
        color: 'white',
        fontSize: 20,
        lineHeight: 30, 
        fontFamily: 'Montserrat_400Regular',
    },
    efeitoTrow: {
        width: 350,
        height: 350,
        position: 'absolute',
        bottom: "-10%",
        right: "-30%", 
        borderRadius: 175,
        opacity: 0.5,
        
        
    },

})