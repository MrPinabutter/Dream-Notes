import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { useFonts, Nunito_700Bold, Nunito_400Regular } from '@expo-google-fonts/nunito'
import { Poppins_700Bold, Poppins_500Medium, Poppins_400Regular, Poppins_300Light } from '@expo-google-fonts/poppins'
import AppStack from './src/routes/AppStack'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Nunito_700Bold,
    Nunito_400Regular,
    Poppins_300Light,
  });

  if (!fontsLoaded) {
    return <View/>;
  } else {
    return (
      <>
        <StatusBar style="dark"/>
        <AppStack />
      </>
    );
  }
}