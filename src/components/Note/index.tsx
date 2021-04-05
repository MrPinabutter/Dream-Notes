import { StackActions, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

interface NoteProps {
  dream: {
    title?: string
    dreamText: string
    arrayTags?: Array<string>,
  }
  theme?: number,
  id: Number,
}

export default function Note({theme = 0, ...props}:NoteProps) {
  const { navigate, dispatch } = useNavigation()
  const themeColor = [
    ['#B189EB', '#CDB0F6']
  ]

  const navigateAction = StackActions.push('DreamNote', {...props, theme, id: props.id});

  function handleNavigaionToDreamNote(){
    dispatch(navigateAction)
  }

  return (
    <LinearGradient 
      style={styles.note}
      colors={themeColor[theme]}
      start={{x:0,y:0}}
      end={{x:1,y:1}}
    >  
      <RectButton style={{flex:1, paddingBottom: 20, overflow: 'hidden'}} onPress={handleNavigaionToDreamNote}>
        <View style={{padding: 15, paddingTop: 8, overflow: 'hidden', height: 'auto'}}>
          { props.dream.title 
          ?
            <Text style={{fontFamily: 'Nunito_700Bold', color: '#150326', fontSize: 18}}>{props.dream.title}</Text>
          :
            <Text style={{fontFamily: 'Nunito_700Bold', color: '#150326', fontSize: 18}}>Titulo</Text>
          }
          
          <Text style={{fontFamily: 'Poppins_300Light', color: '#1A072C', fontSize: 14}}>
            {props.dream.dreamText}
          </Text>
        </View>
      </RectButton>
    </LinearGradient>
  );
}
