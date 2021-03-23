import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import cloud from '../../assets/images/cloud.png';

import styles from './styles';

interface NoteProps {
  title?: string
  dream: string
  tags?: Array<string>,
  color1?: string,
  color2?: string
}

export default function DreamNote() {



  return (
    <View style={{flex: 1, backgroundColor: '#F2ECFF', alignItems: 'center'}}>
      <LinearGradient 
        style={styles.container}
        colors={['#4E14A8', '#8F27ED']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      > 
        <Feather name="chevron-left" size={32} style={{marginTop: 24, marginLeft: 10 }} color="white" />
        <Image source={cloud} style={{marginTop:'8%', width: 90, height: 51}} />
      </LinearGradient >
      <View style={{marginTop: 30, width: '85%', height: 'auto', minHeight: 300, backgroundColor: '#FFB775', borderRadius: 13}}>
        <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24, marginHorizontal: 16, marginTop: 10}}>Sonho bem doido</Text>
        <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, marginHorizontal: 15, marginTop: 10}}>Sonhei q tava dançando no mar enquanto um tubarão fazia piadinha de mim foi mt triste pq ele tava com medo de mim e eu me senti um monstro sla essa vida é complicada</Text>
      </View>
    </View>
  )
}