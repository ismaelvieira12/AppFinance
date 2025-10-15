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
import { CartesianChart, Bar } from "victory-native"; 


// Componente do Gráfico Separado para Renderização Condicional
// Componente do Gráfico Separado para Renderização Condicional
const BarChartComponent = ({ DATA_15_DIAS, styles }) => (
    // Certifique-se que styles.containerGrafico não esteja aplicando overflow: hidden ou padding interno excessivo
    <View style={styles.containerGrafico}>
        <View>
            <Text style={styles.textSaldo}>Seu saldo total</Text>
            <Text style={styles.valueSaldo}>R$: 1.000,00</Text>
        </View>
        
        {/* Adicione um padding horizontal maior aqui, caso styles.containerGrafico não tenha margens laterais */}
        <View style={{flex: 1, paddingTop: 20 }}> 
            <CartesianChart 
                data={DATA_15_DIAS} 
                xKey="day" 
                yKeys={["highTmp"]}
                
                // Aumentamos o domínio padding para as barras não cortarem e os labels do Eixo Y terem espaço
                domainPadding={{ left: 20, right: 20, top: 0 }} 
                
                axisConfig={{
                    x: { 
                        label: 'Dia do Mês',
                        visible: true,
                        line: { stroke: 'transparent' },
                        tickLines: { stroke: 'transparent' }, 
                        
                        // 👇 MUDANÇA: Usando o fontFamily: 'System' ou apenas omitindo para o SVG não quebrar
                        label: { fill: '#000000', fontSize: 10, dy: 10, fontFamily: 'System' }, 
                        tickLabels: { fontSize: 8, fill: '#000000', fontFamily: 'System' }
                    }, 
                    y: { 
                        label: 'Valor (R$)',
                        visible: true,
                        line: { stroke: 'transparent' },
                        tickLines: { stroke: 'transparent' }, // Remove as linhas de grade
                        
                        // 👇 MUDANÇA: Usando o fontFamily: 'System' ou apenas omitindo
                        label: { fill: '#000000', fontSize: 10, dx: -5, fontFamily: 'System' }, // dx: move o label um pouco para esquerda
                        tickLabels: { fontSize: 8, fill: '#000000', fontFamily: 'System' },
                        
                        domain: [Math.min(...DATA_15_DIAS.map(d => d.highTmp)) * 1.1, Math.max(...DATA_15_DIAS.map(d => d.highTmp)) * 1.1],
                    },
                }}
            >
                {({ points, chartBounds }) => (
                    <Bar
                        points={points.highTmp} 
                        chartBounds={chartBounds}
                        color="#037df0"
                        roundedCorners={{ topLeft: 5, topRight: 5 }}
                        barSpacing={5} 
                        
                    />
                )}
            </CartesianChart>
        </View>
    </View>
);


export const Wellcome = () => {
    
    const DATA_15_DIAS = [
        { day: 1, highTmp: 45 },
        { day: 2, highTmp: 48 },
        { day: 3, highTmp: 52 },
        { day: 4, highTmp: 55 },
        { day: 5, highTmp: -58 },
        { day: 6, highTmp: 62 },
        { day: 7, highTmp: -65 },
        { day: 8, highTmp: 68 },
        { day: 9, highTmp: 72 },
        { day: 10, highTmp: 75 },
        { day: 11, highTmp: 78 },
        { day: 12, highTmp: 82 },
        { day: 13, highTmp: 85 },
        { day: 14, highTmp: 88 },
        { day: 15, highTmp: 92 },
    ];  

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

            {/* Parte do grafico (Agora usando o componente que só é renderizado APÓS a fonte) */}
            <BarChartComponent DATA_15_DIAS={DATA_15_DIAS} styles={styles} />

            {/* Parte de ir para metas */}
            
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