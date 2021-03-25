import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import cloud from '../../assets/images/cloud.png';

import styles from './styles';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

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
  const { goBack } = useNavigation()

  const route = useRoute<RouteProp<DreamNoteProps, 'DreamNotes'>>()
  const { params } = route
  const { arrayTags, dreamText, title } = params.dream

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
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.dreamText}>{dreamText}</Text>
        </View>

        <View style={styles.contain}>
          <Text style={styles.labelTag}>Tags</Text>
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