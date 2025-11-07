import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Wellcome } from '../Screens/Wellcome/Wellcome.jsx';
import MetasScreen from '../Screens/MetasScreen/MetasScreen.jsx';
import { PlanejamentoMensal } from '../Screens/planejamentoMensal/PlanejamentoMensal.jsx';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Wellcome} />
      <Drawer.Screen name="Metas" component={MetasScreen} />
      <Drawer.Screen name="PlanejamentoMensal" component={PlanejamentoMensal} />
    </Drawer.Navigator>
  );
}
