import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import cloud from '../../assets/images/cloud.png';

import styles from './styles';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import pencilIcon from '../../assets/icons/pencilIcon.png';

interface NoteProps {
  title?: string
  dreamText: string
  arrayTags?: Array<string>,
}

type DreamNoteProps = {
  DreamNotes: {
    dream: NoteProps,
    theme: number
  }
}

export default function DreamNote() {
  const [dreamNote, setDreamNote] = useState('');
  const [dreamTitle, setDreamTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  
  const route = useRoute<RouteProp<DreamNoteProps, 'DreamNotes'>>()
  const { params } = route
  const { arrayTags, dreamText, title } = params.dream
  
  const { goBack } = useNavigation();

  useEffect(() => {
    setDreamNote(dreamText)
    setDreamTitle(title || 'Title')
  }, [])

  function toggleEditMode() {
    setEditMode(!editMode)
  }

  return (
    <View style={styles.container}>
      <LinearGradient 
        style={styles.header}
        colors={['#4E14A8', '#8F27ED']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      > 
        <RectButton onPress={goBack} >
          <Feather name="chevron-left" size={32} style={styles.backIcon} color="white" />
        </RectButton>
        <Image source={cloud} style={styles.image} />
      </LinearGradient >
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.dreamContainer}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            { editMode 
              ?
              <TextInput value={dreamTitle} multiline onChangeText={setDreamTitle} style={styles.title}/>
              : 
              <Text style={styles.title} >{dreamTitle}</Text>
            }
            <RectButton onPress={toggleEditMode} style={styles.editIcon}>
              <Image source={pencilIcon} style={{width: 14, height: 14}} ></Image>
            </RectButton>
          </View>
          { editMode
            ?
            <TextInput onChangeText={setDreamNote} value={dreamNote} multiline style={styles.dreamText} />
            :
            <Text style={styles.dreamText} >{dreamNote}</Text>
          }
        </View>

        <View style={styles.contain}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.labelTag}>Tags</Text>
            <RectButton style={styles.editIcon}>
              <Image source={pencilIcon} style={{width: 14, height: 14}} ></Image>
            </RectButton>
          </View>
          <View style={styles.tagContainer}>
            {arrayTags?.map((tag: string, idx: number) => {
              return(
                <View key={tag} style={styles.tag}>
                  <View style={styles.dotTag} />
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              )
            })}
        </View>
        </View>
      </ScrollView>
    </View>
  )
}