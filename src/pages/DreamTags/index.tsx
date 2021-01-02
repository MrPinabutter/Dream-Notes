import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign, EvilIcons, Feather, Ionicons } from '@expo/vector-icons'
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function DreamTags(){
  const [tag, setTag] = useState('')
  const [arrayTags, setArrayTags] = useState<string[]>([])

  const { navigate }  = useNavigation()

  function handleNavigateToLanding() {
    navigate('Landing')
  }

  function addTag(newTag: string) {
    // Verificador 
    let ver = true

    // Impede tags vazias
    if(newTag == ''){
      ver = false
    }

    // Impede Tags Repeditas
    arrayTags.forEach(tagAtual => {
      if(newTag === tagAtual){
        ver = false
      }
    })

    // Salva e exibe a tag
    if (ver == true){
      setArrayTags([...arrayTags, newTag])
      setTag('')
    }
  }

  function removeTag(idx: number){
    const itensCopy = Array.from(arrayTags);
    itensCopy.splice(idx, 1);
    setArrayTags(itensCopy);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton
          onPress={handleNavigateToLanding}
        >
          <Feather name="chevron-left" size={32} color="#AC88CC" />
        </RectButton>
        <Text style={styles.headerText}>
          Primeiro passo
        </Text>
        <View style={{width: 32}}/>
      </View>

      <View style={{width: '90%', marginTop: 15}}>
        <Text style={styles.infoText}>
        - Adicione palavras-chave para te ajudar a lembrar do seu sonho
        </Text>
        <Text style={styles.spanText}>
          ex: morcegos, aviões, passaros
        </Text>
      </View>
      
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>

        <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 30, width: '90%'}}>
          <TextInput 
            value={tag}
            style={styles.textInput}
            onChangeText={setTag}
          />

          <RectButton
            onPress={() => addTag(tag)} 
            style={styles.addTagsButton}>
            <Text style={styles.plusText}>
              +
            </Text>
          </RectButton>
        </View>

        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '95%'}}>
          {arrayTags.map((tag, idx) => {
            return(
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
                <RectButton style={{width:20, height:20, alignItems: 'center', justifyContent: 'center'}} onPress={() => removeTag(idx)}>
                  <Ionicons name="ios-close" size={24} color="#888" />
                </RectButton>
              </View>
            )
          })}
        </View>
      </ScrollView>

      <View style={{height:100, width: '100%', alignItems: 'center', position: 'relative'}}>
        <RectButton style={styles.continueButton}>
          <Text style={styles.continueText}>
            Continuar
          </Text>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#E5DAFC', 
    flex:1, 
    alignItems: 'center'
  },

  header:{
    marginTop:30, 
    width: '90%', 
    height: 85, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexDirection: 'row' 
  },

  headerText:{
    fontFamily: 'Comfortaa_700Bold', 
    fontSize: 24, 
    color: '#5E4278'
  },

  infoText: {
    fontFamily: 'Montserrat_400Regular', 
    fontSize: 18, 
    color: '#9166B8'
  },

  spanText: {
    fontFamily: 'Montserrat_400Regular', 
    fontSize: 14, 
    color: '#AC88CC', 
    marginTop: 5
  },

  textInput: {
    flex: 8, 
    height: 45, 
    backgroundColor: '#FBFBFB', 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    marginRight: 10,
    fontFamily: 'Montserrat_400Regular'
  },

  addTagsButton: {
    flex: 1,
    height: 45, 
    backgroundColor: '#7C52A3', 
    borderRadius: 15, 
    padding: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  plusText: {
    fontFamily: 'Comfortaa_700Bold', 
    fontSize: 44, 
    color: '#fff', 
    marginTop: -10
  },

  continueButton: {
    width: '90%', 
    height: 55, 
    backgroundColor: '#60E18F', 
    borderRadius: 15, 
    padding: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  continueText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 24, 
    color: '#fff'
  },

  tag: {
    width:'auto', 
    height: 30, 
    backgroundColor: '#FEFFD4', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 5, 
    flexDirection: 'row', 
    marginLeft: 10, 
    marginBottom: 14
  },

  removeTag: {
    backgroundColor: '#ddd', 
    height: 14, 
    width: 14, 
    borderRadius: 12, 
    marginLeft: 5, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  tagText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#5B4370',
    marginRight: 5
  }
});