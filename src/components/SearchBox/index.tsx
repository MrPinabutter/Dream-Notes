import React, { useState } from 'react';
import {  StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface SearchProps {
  search: React.Dispatch<React.SetStateAction<DreamProps[]>>;
  dreams: DreamProps[];
}

interface DreamProps{
  arrayTags: Array<string>;
  title: string;
  dreamText: string;
}

export default function SearcBox({ search, dreams }: SearchProps) {
  const [value, setValue] = useState('');

  function handleChangeText(text: string){
    setValue(text);
    search(
      dreams.filter(val => (
        val.title.toLowerCase().includes(text.toLowerCase()) || 
        val.dreamText.toLowerCase().includes(text.toLowerCase())
      )
    ))
  }

  return(
    <TextInput 
      onChangeText={handleChangeText}
      value={value}
      style={styles.box} 
      placeholder="Pesquise"
    />
  );
}

const styles = StyleSheet.create({
  box:{
    width: '90%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 12,
    borderColor: '#4E14A8',
    borderWidth: 0.4,
    fontFamily: 'Poppins_300Light'
  }

})