import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import cloud from '../../assets/images/cloud.png';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, RouteProp } from '@react-navigation/native';

interface NoteProps {
  title?: string
  dreamText: string
  arrayTags?: Array<string>,
}

type DreamNoteProps = {
  DreamNotes: {
    dream: NoteProps,
    theme: number
  }
}

export default function DreamNote() {

  const route = useRoute<RouteProp<DreamNoteProps, 'DreamNotes'>>()
  const { params } = route

  const { arrayTags } = params.dream

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
      <ScrollView contentContainerStyle={{alignItems: 'center', width: '100%'}} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 30, width: Dimensions.get('screen').width*0.85, height: 'auto', minHeight: 300, backgroundColor: '#FFB775', borderRadius: 13}}>
          <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24, marginHorizontal: 16, marginTop: 10}}>{params.dream.title}</Text>
          <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, marginHorizontal: 15, marginTop: 10, marginBottom: 20}}>{params.dream.dreamText}</Text>
        </View>

        <View style={{width: Dimensions.get('screen').width*0.9, marginTop: 15}}>
          <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24, marginHorizontal: 16, marginTop: 10}}>Tags</Text>
          <View style={{marginTop: 5, flexDirection: 'row', flexWrap: 'wrap', width: Dimensions.get('screen').width*0.9, marginBottom: 80}}>
            {arrayTags?.map((tag: string, idx: number) => {
              return(
                <View key={tag} style={styles.tag}>
                  <View style={{width:6, height: 6, borderRadius: 3, backgroundColor: '#543918', marginRight: 5}} />
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              )
            })}
        </View>
        </View>
      </ScrollView>
    </View>
  )
}