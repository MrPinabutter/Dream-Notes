import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, TextInput } from 'react-native-gesture-handler'

import cloud from '../../assets/images/cloud.png'

import SearcBox from '../../components/SearchBox'
import PlusButton from '../../components/PlusButton'

export default function Landing(){
  return(
    <View style={{backgroundColor: '#C4B2EB', height: '100%', alignItems: 'center'}}>
      <LinearGradient 
        style={styles.container}
        colors={['#4E14A8', '#8F27ED']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      > 
        <View style={styles.textDate}>
          <Text style={styles.date}>Dia 21/11</Text>
          <Text style={styles.registrados}>Sonhos registrados: 4</Text>
        </View>
        <Image source={cloud} style={{marginTop:'8%'}}></Image>
      </LinearGradient >
      <SearcBox/>

      

      <View style={{position:'absolute', right: 30, bottom: 40}}>
        <PlusButton/>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  inputContainer: {
    width: '70%',
    height: 50,
    borderRadius:15,
    backgroundColor: '#f5f5f5',
    paddingLeft: 15
  },

  date:{
    fontWeight: '600',
    color: '#AA81CF',
    fontSize: 24
  },

  textDate:{
    marginTop:'6%',
    marginLeft: '5%',
  },

  registrados:{
    color:'#9166B8',
    fontSize: 14,
    fontWeight: '200',
  }
})