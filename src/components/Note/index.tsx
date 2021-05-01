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
  const { dispatch } = useNavigation()
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
      <RectButton 
        style={styles.container} 
        onPress={handleNavigaionToDreamNote}
      >
        <View style={styles.dreamContent}>
          { props.dream.title 
          ?
            <Text style={styles.title}>
              {props.dream.title}
            </Text>
          :
            <Text style={styles.title}>
              Titulo
            </Text>
          }
          
          <Text style={styles.body}>
            {props.dream.dreamText}
          </Text>
        </View>
      </RectButton>
    </LinearGradient>
  );
}
