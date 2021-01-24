import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

export default function CreateDream({route}: any) {
  const {arrayTags} = route.params

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton
          onPress={() => {}}
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
          <Text style={styles.titleText}>Título </Text>
        </View>
        <TextInput style={styles.textInputTitle}></TextInput>

        <View style={{width: '90%', marginBottom: 10, marginTop: 5}}>
          <Text style={styles.titleText}>Seu sonho </Text>
        </View>
        <TextInput style={styles.dreamText} multiline></TextInput>
        
        {arrayTags && <View style={{width: '90%', marginBottom: 10, marginTop: 5}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#E5DAFC', 
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

  titleText: {
    fontFamily: 'Montserrat_400Regular', 
    fontSize: 18, 
    color: '#9166B8'
  },
  
  textInputTitle: {
    width: '90%', 
    height: 44, 
    backgroundColor: '#FBFBFB', 
    borderRadius: 15, 
    marginBottom: 15,
    padding: 15,
    fontFamily: 'AutourOne_400Regular'
  },

  dreamText:{
    width: '90%', 
    height: 300, 
    backgroundColor: '#FBFBFB', 
    borderRadius: 15, 
    marginBottom: 15,
    padding: 15,
    flexDirection: 'column',
    textAlignVertical: 'top',
    fontFamily: 'RobotoSlab_400Regular',
  },

  tag: {
    width:'auto', 
    height: 30, 
    backgroundColor: '#FDED9D', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingLeft: 8,
    padding: 5, 
    flexDirection: 'row', 
    marginLeft: 10, 
    marginBottom: 14,
    elevation: 4
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
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 14,
    color: '#333',
    marginRight: 5
  },

  continueButton: {
    width: '90%', 
    height: 55, 
    backgroundColor: '#60E18F', 
    borderRadius: 15, 
    padding: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 30
  },

  continueText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 24, 
    color: '#fff'
  },

})