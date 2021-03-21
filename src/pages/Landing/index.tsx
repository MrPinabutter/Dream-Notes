import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import cloud from '../../assets/images/cloud.png';

import SearcBox from '../../components/SearchBox';
import PlusButton from '../../components/PlusButton';
import Note from '../../components/Note';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppLoading } from 'expo';

interface DreamProps{
  arrayTags: Array<string>;
  title: string;
  dreamText: string;
}

export default function Landing(){
  const [focused, setFocused] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  async function GetDreams() {
    const item = await AsyncStorage.getItem("@Dreams");
    const value = item ? JSON.parse(item) : [];
    console.log(value);
    
    setDreams(value);
    setLoading(false);
  };

  useEffect(() => {
    GetDreams();
  }, []);

  const _keyboardDidShow = () => {
    setFocused(false);
  };

  const _keyboardDidHide = () => {
    setFocused(true);
  };

  if(isLoading){
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <AppLoading  />
      </View>
    );
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
          {dreams.map((dream: DreamProps) => {
            return <Note key={dream.title} title={dream.title} dream={dream.dreamText} />
          })}
          <View style={{overflow: 'hidden', width: '40%', height: 260, marginHorizontal:10}} />
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
