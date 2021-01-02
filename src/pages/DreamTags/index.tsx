import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RectButton, TextInput } from 'react-native-gesture-handler';

export default function DreamTags(){
  return(
    <View style={{backgroundColor: '#E5DAFC', flex:1, alignItems: 'center'}}>
      <View style={{marginTop:30, width: '90%', height: 85, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        <RectButton>
          <Feather name="chevron-left" size={32} color="#AC88CC" />
        </RectButton>
        <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 24, color: '#5E4278'}}>
          Primeiro passo
        </Text>
        <View style={{width: 32}}/>
      </View>

      <View style={{width: '90%'}}>
        <Text style={{fontFamily: 'Montserrat_400Regular', fontSize: 18, color: '#9166B8'}}>
        - Adicione palavras-chave para te ajudar a lembrar do seu sonho
        </Text>
        <Text style={{fontFamily: 'Montserrat_400Regular', fontSize: 14, color: '#AC88CC', marginTop: 5}}>
          ex: morcegos, aviões, passaros
        </Text>
      </View>

      <TextInput style={{width: '90%', height: 45, backgroundColor: '#FBFBFB', borderRadius: 15, padding: 15, fontFamily: 'Comfortaa_700Bold', marginTop: 30}}>
      </TextInput>
      <RectButton style={{width: '90%', height: 45, backgroundColor: '#7C52A3', borderRadius: 15, padding: 15, marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 44, color: '#fff', marginTop: -10}}>
          +
        </Text>
      </RectButton>

      <RectButton style={{width: '90%', height: 55, backgroundColor: '#60E18F', borderRadius: 15, padding: 15, marginTop: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 80}}>
        <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 24, color: '#fff'}}>
          Continuar
        </Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({

});