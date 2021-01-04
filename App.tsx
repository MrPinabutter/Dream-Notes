import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { useFonts, NanumMyeongjo_800ExtraBold } from '@expo-google-fonts/nanum-myeongjo'
import { NanumPenScript_400Regular } from '@expo-google-fonts/nanum-pen-script'
import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand'
import { AutourOne_400Regular } from '@expo-google-fonts/autour-one'
import { Comfortaa_700Bold } from '@expo-google-fonts/comfortaa'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab'

import AppStack from './src/routes/AppStack'

export default function App() {
  let [fontsLoaded] = useFonts({
    AutourOne_400Regular,
    RobotoSlab_400Regular,
    PatrickHand_400Regular,
    Comfortaa_700Bold,
    Montserrat_400Regular,
    NanumMyeongjo_800ExtraBold,
    RobotoSlab_700Bold
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