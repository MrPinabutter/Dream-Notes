import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Keyboard, BackHandler } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import cloud from '../../assets/images/cloud.png';

import SearcBox from '../../components/SearchBox';
import PlusButton from '../../components/PlusButton';
import Note from '../../components/Note';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppLoading } from 'expo';
import { useRoute, RouteProp, useIsFocused } from '@react-navigation/native';

interface DreamProps{
  arrayTags: Array<string>;
  title: string;
  dreamText: string;
}

type ParamList = {
  Landing?: {
    load: boolean
  };
};


export default function Landing({route}: any){
  const [focused, setFocused] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [dreams, setDreams] = useState<DreamProps[]>([]);
  const [filteredDreams, setFilteredDreams] = useState<DreamProps[]>([]);
  
  const isFocused = useIsFocused();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp()
      return true;
    });
    
    return () => BackHandler.removeEventListener("hardwareBackPress", () => {
      BackHandler.exitApp()
      return true;
    });
  }, [])

  async function GetDreams() {
    const item = await AsyncStorage.getItem("@Dreams");
    const value = item ? JSON.parse(item) : [];
    
    setDreams(value);
    setFilteredDreams(value);
    setLoading(false);
  };

  useEffect(() => {
    GetDreams();
  }, [isFocused]);

  const _keyboardDidShow = () => {
    setFocused(false);
  };

  const _keyboardDidHide = () => {
    setFocused(true);
  };

  if(isLoading){
    return (
      <View style={styles.loading}>
        <AppLoading  />
      </View>
    );
  };

  return(
    <View style={styles.container}>
      <LinearGradient 
        style={styles.header}
        colors={['#4E14A8', '#8F27ED']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      > 
        <View style={styles.textDate}>
          <Text style={styles.date}>
            Dia {new Date().getDate()}/{new Date().getMonth() + 1}
          </Text>

          <Text style={styles.registrados}>
            Sonhos registrados: {dreams.length}
          </Text>
        </View>

        <Image 
          source={cloud} 
          style={{marginTop:'8%'}} 
        />
      </LinearGradient >

      <View style={styles.dreamLabel}>
        <Text style={styles.dreamLabelText}>
          Seus sonhos
        </Text>
      </View>

      <SearcBox search={setFilteredDreams} dreams={dreams} />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{width: '100%'}}
      >
        <View style={styles.notesContainer}>
          {filteredDreams.map((dream: DreamProps, idx: Number) => 
            <Note 
              key={dream.title+''+idx} 
              dream={dream} 
              id={idx}
            />
          )}

          <View style={styles.ghostNote} />
        </View>
      </ScrollView>

      {focused && 
        <View style={styles.buttonContainer}>
          <PlusButton/>
        </View>
      }
    </View>
  )
}
