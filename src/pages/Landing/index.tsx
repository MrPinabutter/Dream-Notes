import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Keyboard } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, TextInput } from 'react-native-gesture-handler'

import cloud from '../../assets/images/cloud.png'

import SearcBox from '../../components/SearchBox'
import PlusButton from '../../components/PlusButton'
import Note from '../../components/Note'

import styles from './styles'

export default function Landing(){
  const [focused, setFocused] = useState(true)

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setFocused(false)
  };

  const _keyboardDidHide = () => {
    setFocused(true)
  };

  return(
    <View style={{backgroundColor: '#E5DAFC', height: '100%', alignItems: 'center'}}>
      <LinearGradient 
        style={styles.container}
        colors={['#4E14A8', '#8F27ED']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      > 
        <View style={styles.textDate}>
          <Text style={styles.date}>Dia {new Date().getDate()}/{new Date().getMonth() + 1}</Text>
          <Text style={styles.registrados}>Sonhos registrados: 4</Text>
        </View>
        <Image source={cloud} style={{marginTop:'8%'}}></Image>
      </LinearGradient >
      <SearcBox/>

      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <View style={styles.notesContainer}>
          <Note title="Piranhas assassinas comedoras de cerebro" dream="Eu tava na balada balaad bladada blalasl alsldals alsdfasldflasdf las dflasdf  junto com os meus mano, e chegou o vanderlei pra da ideia errada"></Note>
          <Note title="pelado" dream="Sonhei pelado na escola denovo :("></Note>
          <Note title="uva" dream="sonhei queria mt um picolé de uva" ></Note>
          <Note title="pesadelo" dream="Tava fugindo de um leão"></Note>
          <Note title="focas" dream="Tava abraçando umas focas quando de repente um avião sai do chão e começa a me atacas"></Note>
          <Note dream="teste"></Note>
        </View>
      </ScrollView>

      {focused && 
        <View style={{position:'absolute', right: 20, bottom: 30}}>
          <PlusButton/>
        </View>
      }
    </View>
    
  )
}
