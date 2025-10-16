import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './wellcome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from '@expo-google-fonts/montserrat/useFonts';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat/400Regular';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat/700Bold';
import { useNavigation } from '@react-navigation/native'; // 👈 Importa o hook
import React, { useState } from 'react'; // 👈 precisa para o useState
import { useDrawerStatus } from '@react-navigation/drawer';
import { BarChart } from "react-native-gifted-charts";


export const Wellcome = () => {
    
 const data=[ {value:50}, {value: 80}, {value:80}, {value:70} , {value: 80}, {value:80}, {value:70}]

    // ... Lógica de Estado (Mantida)
    const [statusBarStyle, setStatusBarStyle] = useState("light");
    const isDrawerOpen = useDrawerStatus() === 'open';
        React.useEffect(() => {
        setStatusBarStyle(isDrawerOpen ? 'dark' : 'light');
    }, [isDrawerOpen]);

    const navigation = useNavigation();
    const handleClick = () => {
        setStatusBarStyle("dark"); 
        navigation.openDrawer();
    }
    // Fim da Lógica de Estado

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });


    // Renderiza a tela de carregamento ENQUANTO as fontes não carregam.
    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
    }
    
    // Renderiza o componente COMPLETO APENAS DEPOIS que as fontes carregaram.
    return (
        <View style={styles.container}>
            
            <LinearGradient style={styles.efeitoTrow} colors={["#037df0", "#037df0"]}></LinearGradient>
            <LinearGradient
                colors={["#0061BD", "#037df0"]}
                style={styles.headerGradient}
            >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                    <AntDesign  name="menu" size={24} color="white" onPress={() => handleClick()}/>
                    <Image
                        style={{ width: 50, height: 50,  marginTop: 20, borderRadius: 10}}
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt05by-WcwqQ5UHeK0eNhNYxGnrX2CJsHSOA&s'}}
                    />
                </View>
                <Text style={styles.txtWellcome}>Bem vindo(a),</Text>
                <Text style={styles.txtDescritionWellcome}>Gerencie suas finanças aqui!</Text>
            </LinearGradient>
            <View style={styles.containerGrafico}>
                <View>
                    <Text style={styles.textSaldo}>Seu saldo total</Text>
                    <Text style={styles.valueSaldo}>R$: 1.000,00</Text>
                </View>
                <View style={styles.chartContainer}>
                    <BarChart
                        data={data}
                        hideYAxisText={true}
                        xAxisThickness={0}
                        yAxisThickness={0}
                        barWidth={25}
                        spacing={20}
                        noOfSections={3}
                        maxValue={100}
                        height={150}        // 👈 controla a altura
                        width={250} 
                        frontColor={"#0159ab"}
                        gradientColor={"#abd1f4"}        // 👈 controla a largura (ajuste se quiser ocupar mais)
                        showGradient
                        dashGap={500}
                    />
                </View>
            </View>
            
            
            <LinearGradient
                colors={["#4e8fcc", "#02427f"]}
                style={styles.gradientOrganization}
            >
                <LinearGradient style={styles.efeitoThree} colors={['#fff8f8', "#004484"]}></LinearGradient>
                <LinearGradient style={styles.efeitoOne} colors={['#ffffff', "#263e55"]}></LinearGradient>
                <View style={styles.containerOrganization}>
                    <Text style={styles.textOrganization}>Ir para metas</Text>
                    <Text style={styles.textOrganization}>Organize suas finanças</Text>
                </View>
                <AntDesign name="arrow-right" size={24} color="white"/>
            </LinearGradient>
            <StatusBar style={statusBarStyle} />
        </View>
    );
}