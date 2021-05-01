import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles'

export default function Landing(){
  const [name, setName] = useState('');

  async function onSubmmit() {
    await AsyncStorage.setItem("@NAME", name);
  }

  return(
    <LinearGradient 
      style={styles.container}
      colors={['#0A0C43', '#9166B8']}
      start={{x:0,y:0}}
	    end={{x:1,y:1}}
    >
      <View style={styles.logo}>
        <Text style={styles.logoText}>
          Dream {'\n'}Note
        </Text>
      </View>

      <View style={{width:'100%', alignItems:'center'}}>
        <Text style={styles.label}>
          Dreamer
        </Text>

        <TextInput 
          placeholder="Seu nome" 
          value={name}
          onChangeText={setName} 
          style={styles.inputContainer} />
      </View>

      <RectButton 
        style={styles.button} 
        onPress={onSubmmit}
      >
        <Text style={styles.buttonText}>
          Começar
        </Text>
      </RectButton>
    </LinearGradient >
  )
}
