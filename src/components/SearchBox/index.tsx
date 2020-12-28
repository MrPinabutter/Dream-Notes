import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SearcBox() {
  return(
    <TextInput style={styles.box} placeholder="Pesquise" />
  );
}

const styles = StyleSheet.create({
  box:{
    width: '90%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
    paddingLeft: 20,
    fontWeight: 'bold'
  }

})