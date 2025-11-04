import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './wellcome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from '@expo-google-fonts/montserrat/useFonts';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat/400Regular';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat/700Bold';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { BarChart } from 'react-native-gifted-charts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Wellcome = () => {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [statusBarStyle, setStatusBarStyle] = useState('light');
  const [dados, setDados] = useState({ receita: 0, despesa: 0 });

  // 🔹 Carrega dados salvos
  const carregarDados = async () => {
    try {
      const json = await AsyncStorage.getItem('dadosFinanceiros');
      if (json) {
        const data = JSON.parse(json);
        setDados(data);
      }
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    setStatusBarStyle(isDrawerOpen ? 'dark' : 'light');
  }, [isDrawerOpen]);

  const handleClick = () => {
    setStatusBarStyle('dark');
    navigation.openDrawer();
  };

  const saldoTotal = dados.receita - dados.despesa;

  // Gráfico com base nos dados
  const barData = [
    { value: dados.receita, label: 'Receita', frontColor: '#177AD5' },
    { value: -dados.despesa, label: 'Despesa', frontColor: '#FEC601' },
  ];

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <LinearGradient style={styles.efeitoTrow} colors={['#fad348de', '#ff6f00e4']} />

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
            <Text style={styles.valueSaldo}>R$: {saldoTotal.toFixed(2)}</Text>
          </View>

          <View style={styles.chartContainer}>
            <BarChart
              data={barData}
              height={180}
              barWidth={40}
              spacing={50}
              yAxisThickness={0}
              xAxisThickness={0}
              width={300}
              hideYAxisText
              hideRules
              initialSpacing={0}
              noOfSections={3}
            />
          </View>
        </View>

        <LinearGradient colors={['#4e8fcc', '#02427f']} style={styles.gradientOrganization}>
          <LinearGradient style={styles.efeitoThree} colors={['#fff8f8', '#004484']} />
          <LinearGradient style={styles.efeitoOne} colors={['#ffffff', '#263e55']} />
          <TouchableOpacity
            style={styles.containerOrganization}
            onPress={() => navigation.navigate('Metas')}
          >
            <Text style={styles.textOrganization}>Ir para metas</Text>
            <Text style={styles.textOrganization}>Organize suas finanças</Text>
          </TouchableOpacity>
          <AntDesign name="arrow-right" size={24} color="white" />
        </LinearGradient>

        <StatusBar style={statusBarStyle} />
      </ScrollView>
    </View>
  );
};
