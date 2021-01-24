import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './styles'

export default function DreamTags(){
  const [tag, setTag] = useState('')
  const [arrayTags, setArrayTags] = useState<string[]>([])

  const { navigate }  = useNavigation()

  function handleNavigateToLanding() {
    navigate('Landing')
  }

  function handleNavigateToCreateDream() {
    navigate('CreateDream', {arrayTags})
  }

  function addTag(newTag: string) {
    let ver = true
    if(newTag == '') { ver = false }

    arrayTags.forEach(tagAtual => {
      if(newTag === tagAtual) { ver = false }
    })
    if(ver == true) {
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
            maxLength={30}
          />

          <RectButton
            onPress={(e) => addTag(tag)}
            disallowInterruption 
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
        <RectButton style={styles.continueButton} onPress={handleNavigateToCreateDream}>
          <Text style={styles.continueText}>
            Continuar
          </Text>
        </RectButton>
      </View>
    </View>
  );
}
