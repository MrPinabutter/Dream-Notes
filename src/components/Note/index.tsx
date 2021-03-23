import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface NoteProps {
  title?: string
  dream: string
  tags?: Array<string>,
  color1?: string,
  color2?: string
}

export default function Note({color1='#FF8675', color2='#FCA59C',...props}:NoteProps) {
  const { navigate } = useNavigation()

  function handleNavigaionToDreamNote(){
    navigate('DreamNote', props)
  }

  return (
    <LinearGradient 
      style={styles.note}
      colors={[color1, color2]}
      start={{x:0,y:0}}
      end={{x:1,y:1}}
    >  
      <RectButton style={{flex:1}} onPress={handleNavigaionToDreamNote}>
        <View style={{padding: 15, paddingTop: 8, overflow: 'hidden', height: 'auto'}}>
          { props.title 
          ?
            <Text style={{fontFamily: 'Nunito_700Bold', color: '#150326', fontSize: 18}}>{props.title}</Text>
          :
            <Text style={{fontFamily: 'Nunito_700Bold', color: '#150326', fontSize: 18}}>Titulo</Text>
          }
          
          <Text style={{fontFamily: 'Poppins_300Light', color: '#1A072C', fontSize: 14}}>
            {props.dream}
          </Text>
        </View>
      </RectButton>
    </LinearGradient>
  );
}
