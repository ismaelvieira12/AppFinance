import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Defina suas telas aqui

const RootStack = createNativeStackNavigator({
    screens: {
        // Defina suas telas aqui
    }
});

export const AppNavigator = createStaticNavigation(RootStack);