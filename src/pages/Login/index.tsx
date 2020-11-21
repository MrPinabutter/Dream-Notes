import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


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
        <Text style={styles.label}>Nome</Text>
        <TextInput placeholder="Seu nome" style={styles.inputContainer}></TextInput>
      </View>
      <RectButton style={styles.button} onPress={handleNavigationToLanding}>
        <Text style={styles.buttonText}>Começar</Text>
      </RectButton>
    </LinearGradient >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  logo:{
    width: 270,
    height: 215,
    marginTop: '50%'
  },

  logoText:{
    fontSize:48,
    color: '#9166B8',
    fontWeight: 'bold'
  },

  button:{
    width: '70%',
    height: 50,
    borderRadius:15,
    backgroundColor: '#4D52DB',

    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },

  inputContainer: {
    width: '70%',
    height: 50,
    borderRadius:15,
    backgroundColor: '#f5f5f5',
    paddingLeft: 15
  }, 

  label:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9166B8',
    marginLeft: '-55%',
    marginBottom: 10
  }
})