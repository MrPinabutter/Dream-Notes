import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { useFonts, NanumMyeongjo_800ExtraBold } from '@expo-google-fonts/nanum-myeongjo'
import { NanumPenScript_400Regular } from '@expo-google-fonts/nanum-pen-script'
import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand'
import { AutourOne_400Regular } from '@expo-google-fonts/autour-one'

import AppStack from './src/routes/AppStack'

export default function App() {
  let [fontsLoaded] = useFonts({
    AutourOne_400Regular,
    NanumPenScript_400Regular,
    PatrickHand_400Regular
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