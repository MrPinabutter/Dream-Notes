import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Landing(){
  const { navigate } = useNavigation()
  function handleNavigationToLanding(){
    navigate('Landing')
  }

  return(
    <LinearGradient 
      style={styles.container}
      colors={['#0A0C43', '#9166B8']}
      start={{x:0,y:0}}
	    end={{x:1,y:1}}
    >
      <View style={styles.logo}>
        <Text style={styles.logoText}>Dream {'\n'}Note</Text>
      </View>
      <View style={{width:'100%', alignItems:'center'}}>
        <Text style={styles.label}>Dreamer</Text>
        <TextInput placeholder="Seu nome" style={styles.inputContainer}></TextInput>
      </View>
      <RectButton style={styles.button} onPress={handleNavigationToLanding}>
        <Text style={styles.buttonText}>Começar</Text>
      </RectButton>
    </LinearGradient >
  )
}
