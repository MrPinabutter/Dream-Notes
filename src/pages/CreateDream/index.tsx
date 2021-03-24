import { Feather } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute, StackActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

type ParamsProps = {
  CreateDream: {
    arrayTags: Array<string>
  } 
}

export default function CreateDream() {
  const [title, setTitle] = useState('')
  const [dreamText, setDreamText] = useState('')

  const route = useRoute<RouteProp<ParamsProps, 'CreateDream'>>()
  const { params } = route
  const { arrayTags } = params

  const { dispatch } = useNavigation()
  const pushAction = StackActions.push('Landing')

  function handleNavigateToLanding(){ 
    dispatch(pushAction)
  }

  async function handleSaveDream() {
    await AsyncStorage.getItem('@Dreams').then(dreams => {
      const d = dreams ? JSON.parse(dreams) : []
      console.log(d)      
      d.unshift({title, dreamText, arrayTags})
      AsyncStorage.setItem('@Dreams', JSON.stringify(d))
    }).catch(e => console.log(e))
    handleNavigateToLanding()
  }


  const { goBack } = useNavigation()

  function handleGoDreamTags() {
    goBack()
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton
          onPress={handleGoDreamTags}
        >
          <Feather name="chevron-left" size={32} color="#AC88CC" />
        </RectButton>
        <Text style={styles.headerText}>
          Segundo passo
        </Text>
        <View style={{width: 32}}/>
      </View>

      <ScrollView style={{width: '90%'}} contentContainerStyle={{alignItems: 'center'}} showsVerticalScrollIndicator={false}>
        <View style={{width: '90%', marginBottom: 10}}>
          <Text style={styles.titleText}>Título (Opcional) </Text>
        </View>
        <TextInput 
          style={styles.textInputTitle} 
          maxLength={40}
          value={title}
          onChangeText={setTitle}
        ></TextInput>

        <View style={{width: '90%', marginBottom: 10, marginTop: 5}}>
          <Text style={styles.titleText}>Seu sonho </Text>
        </View>
        <TextInput 
          style={styles.dreamText} 
          multiline
          value={dreamText}
          onChangeText={setDreamText}
        ></TextInput>
        
        {arrayTags.length != 0 && <View style={{width: '90%', marginBottom: 10, marginTop: 5}}>
          <Text style={styles.titleText}>Suas tags </Text>
        </View>}

        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
          {arrayTags.map((tag: string, idx: number) => {
            return(
              <View key={tag} style={styles.tag}>
                <View style={{width:6, height: 6, backgroundColor: '#3D3926', borderRadius: 10, marginRight: 5}} />
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            )
          })}
        </View>

        <RectButton style={styles.continueButton} onPress={handleSaveDream}>
          <Text style={styles.continueText}>
            Finalizar
          </Text>
        </RectButton>
      </ScrollView>
    </View>
  )
}
