import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface NoteProps {
  title?: string
  dream: string
  tags?: Array<string> 
}

export default function Note({...props}:NoteProps) {
  return (
    <View style={styles.note}>
      <View style={styles.title}>
        <View style={{padding:10}}>
          <Text style={styles.titleText}>{props.title ? props.title: 'Sonho'}</Text>
        </View>
      </View>
      <View style={{padding: 15, paddingTop:10, overflow: 'hidden', height: 132}}>
        <Text style={{fontFamily: 'PatrickHand_400Regular', color: '#52503E'}}>
          {props.dream}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  note:{
    width: '40%',
    height: 200,
    backgroundColor: '#E8DDA5',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#918F6E'
  },

  title:{
    width: '100%', 
    height: 'auto',
    backgroundColor: '#D1C194', 
    justifyContent: 'center', 
    borderTopEndRadius: 10, 
    borderTopLeftRadius: 10
  },

  titleText: {
    color:'#fff', 
    fontFamily: 'AutourOne_400Regular', 
    fontSize: 14
  }
});
