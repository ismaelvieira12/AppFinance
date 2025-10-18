import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './wellcome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from '@expo-google-fonts/montserrat/useFonts';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat/400Regular';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat/700Bold';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useDrawerStatus } from '@react-navigation/drawer';
import { BarChart } from 'react-native-gifted-charts';
import { MetasScreen } from '../MetasScreen/MetasScreen.jsx';

const OpenMetas = () => {
  return (
    <>
      <MetasScreen />
    </>
  )
}

export const Wellcome = () => {
  // Dados do gráfico com valores positivos e negativos
  const rawData = [
    { value: 850, label: 'S' },
    { value: -500, label: 'T' },
    { value: 745, label: 'Q' },
    { value: -320, label: 'Q' },
    { value: 600, label: 'S' },
    { value: 256, label: 'S' },
    { value: -300, label: 'D' },
  ];

  // Define cores diferentes conforme o valor
  const barData = rawData.map(item => ({
    ...item,
    frontColor: item.value < 0 ? '#9ec9f5' : '#177AD5', // 👈 azul claro se negativo
  }));

  // Estado da StatusBar e Drawer
  const [statusBarStyle, setStatusBarStyle] = useState('light');
  const isDrawerOpen = useDrawerStatus() === 'open';

  useEffect(() => {
    setStatusBarStyle(isDrawerOpen ? 'dark' : 'light');
  }, [isDrawerOpen]);

  const navigation = useNavigation();
  const handleClick = () => {
    setStatusBarStyle('dark');
    navigation.openDrawer();
  };

  // Fontes
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.efeitoTrow} colors={['#037df0', '#037df0']} />

      <LinearGradient colors={['#0061BD', '#037df0']} style={styles.headerGradient}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <AntDesign name="menu" size={24} color="white" onPress={handleClick} />
          <Image
            style={{ width: 50, height: 50, marginTop: 20, borderRadius: 10 }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt05by-WcwqQ5UHeK0eNhNYxGnrX2CJsHSOA&s',
            }}
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
            data={barData}
            height={120}
            barWidth={20}      // 👈 diminui a largura das barras
            spacing={23}       // 👈 diminui o espaço entre elas
            yAxisThickness={0}
            xAxisThickness={0}
            width={300}
            hideYAxisText
            hideRules
            initialSpacing={0} // 👈 evita margem extra no início
            noOfSections={3}   // opcional: controla a divisão do Y
        />


        </View>
      </View>

      <LinearGradient colors={['#4e8fcc', '#02427f']} style={styles.gradientOrganization}>
        <LinearGradient style={styles.efeitoThree} colors={['#fff8f8', '#004484']} />
        <LinearGradient style={styles.efeitoOne} colors={['#ffffff', '#263e55']} />
        <TouchableOpacity style={styles.containerOrganization} onPress={() => OpenMetas()}>
          <Text style={styles.textOrganization}>Ir para metas</Text>
          <Text style={styles.textOrganization}>Organize suas finanças</Text>
        </TouchableOpacity>
        <AntDesign name="arrow-right" size={24} color="white" />
      </LinearGradient>
  
      <StatusBar style={statusBarStyle} />
    </View>
  );
};
