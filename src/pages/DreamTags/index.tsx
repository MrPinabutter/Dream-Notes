import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { StackActions, useNavigation } from '@react-navigation/native';

import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './styles'

export default function DreamTags(){
  const [tag, setTag] = useState('');
  const [arrayTags, setArrayTags] = useState<string[]>([]);

  const { navigate, dispatch }  = useNavigation();
  const pushAction = StackActions.push('Landing')
  const goBack = StackActions.pop();

  const goBackward = () => {
    dispatch(goBack);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goBackward);
    return () => BackHandler.removeEventListener("hardwareBackPress", goBackward);
  }, [])

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
        <TouchableOpacity 
          activeOpacity={0.5}
          onPress={() => dispatch(pushAction)}
        >
          <Feather 
            name="chevron-left" 
            size={32} 
            color="#AC88CC" 
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>
          Primeiro passo
        </Text>

        <View style={{width: 32}}/>
      </View>

      <View style={styles.infoContent}>
        <Text style={styles.infoText}>
          - Adicione palavras-chave para te ajudar a lembrar do seu sonho
        </Text>

        <Text style={styles.spanText}>
          ex: morcegos, aviões, passaros
        </Text>
      </View>
      
      <ScrollView 
        style={{ width: '100%' }} 
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View style={styles.tagContainer}>
          <TextInput 
            value={tag}
            style={styles.textInput}
            maxLength={30}
            onChangeText={(e) => setTag(e.replace('\n', ''))}
            onKeyPress={(event) => {
              if(event.nativeEvent.key == 'Enter'){
                addTag(tag)
              }}
            }
          />

          <RectButton
            onPress={() => addTag(tag)}
            disallowInterruption 
            style={styles.addTagsButton}
          >
            <Text style={styles.plusText}>
              +
            </Text>
          </RectButton>
        </View>

        <View style={styles.tagsContainer}>
          {arrayTags.map((tag, idx) => {
            return(
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>
                  {tag}
                </Text>

                <RectButton 
                  style={styles.removeTagButton} 
                  onPress={() => removeTag(idx)}
                >
                  <Ionicons 
                    name="ios-close" 
                    size={24} 
                    color="#888" 
                  />
                </RectButton>
              </View>
            )
          })}
        </View>
      </ScrollView>

      <View style={styles.continueButtonContainer}>
        <RectButton 
          style={styles.continueButton} 
          onPress={handleNavigateToCreateDream}
        >
          <Text style={styles.continueText}>
            Continuar
          </Text>
        </RectButton>
      </View>
    </View>
  );
}
