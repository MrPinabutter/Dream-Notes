import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import styles from './styles'

export default function CreateDream({route, navigation}: any) {
  const {arrayTags} = route.params
  console.log(arrayTags);
  
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

        ></TextInput>

        <View style={{width: '90%', marginBottom: 10, marginTop: 5}}>
          <Text style={styles.titleText}>Seu sonho </Text>
        </View>
        <TextInput style={styles.dreamText} multiline></TextInput>
        
        {arrayTags.length != 0 && <View style={{width: '90%', marginBottom: 10, marginTop: 5}}>
          <Text style={styles.titleText}>Suas tags </Text>
        </View>}

        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
          {arrayTags.map((tag: string, idx: number) => {
            return(
              <View key={tag} style={styles.tag}>
                <View style={{width:6, height: 6, backgroundColor: '#7F97B0', borderRadius: 10, marginRight: 5}} />
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            )
          })}
        </View>

        <RectButton style={styles.continueButton} onPress={() => {}}>
          <Text style={styles.continueText}>
            Finalizar
          </Text>
        </RectButton>
      </ScrollView>
    </View>
  )
}
