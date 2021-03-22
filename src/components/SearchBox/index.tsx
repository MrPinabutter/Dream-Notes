import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function SearcBox() {
  return(
    <TextInput style={styles.box} placeholder="Pesquise"/>
  );
}

const styles = StyleSheet.create({
  box:{
    width: '90%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 20,
    borderColor: '#4E14A8',
    borderWidth: 0.4,
    fontFamily: 'Poppins_300Light'
  }

})