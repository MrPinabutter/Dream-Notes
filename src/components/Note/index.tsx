import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface NoteProps {
  title?: string
  dream: string
  tags?: Array<string> 
}

export default function Note({...props}:NoteProps) {
  const { navigate } = useNavigation()

  function handleNavigaionToDreamNote(){
    navigate('DreamNote')
  }
  return (
    <RectButton onPress={handleNavigaionToDreamNote} style={styles.note}>
      <View style={styles.title}>
        <View style={{padding:10}}>
          <Text style={styles.titleText}>{props.title ? props.title: 'Sonho'}</Text>
        </View>
      </View>
      <View style={{padding: 15, paddingTop: 8, overflow: 'hidden', height: 'auto'}}>
        <Text style={{fontFamily: 'RobotoSlab_400Regular', color: '#52503E', fontSize: 14, height: 150}}>
          {props.dream}
        </Text>
      </View>
    </RectButton>
  );
}
