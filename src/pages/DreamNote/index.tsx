import React, { useEffect, useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

import cloud from '../../assets/images/cloud.png';
import check from '../../assets/icons/check.png';
import trash from '../../assets/icons/trash.png';
import x from '../../assets/icons/x.png';

import styles from './styles';
import { RectButton, ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { useRoute, RouteProp, useNavigation, StackActions } from '@react-navigation/native';

import pencilIcon from '../../assets/icons/pencilIcon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NoteProps {
  title?: string
  dreamText: string
  arrayTags: Array<string>,
}

type DreamNoteProps = {
  DreamNotes: {
    dream: NoteProps,
    theme: number, 
    id: number
  },
}

export default function DreamNote() {
  const [dreamNote, setDreamNote] = useState('');
  const [dreamTitle, setDreamTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const [dreams, setDreams] = useState([{}]);

  const route = useRoute<RouteProp<DreamNoteProps, 'DreamNotes'>>()
  const { params } = route

  const [tags, setTags] = useState(['']);
  const [tag, setTag] = useState('');
  
  
  const { dispatch } = useNavigation();
  const goLanding = StackActions.push('Landing')
  
  useEffect(() => {
    async function getDream(){
      await AsyncStorage.getItem('@Dreams').then(dreams => {
        const d = dreams ? JSON.parse(dreams) : [{}]
        setDreams(d);
        
        setDreamTitle(d[params.id].title || 'Title')
        setDreamNote(d[params.id].dreamText)
        setTags(d[params.id].arrayTags)
        AsyncStorage.setItem('@Dreams', JSON.stringify(d))
      }).catch(e => console.log(e))
    } 
    
    getDream()
  }, [params])

  function toggleEditMode() {
    setEditMode(!editMode)
  }

  async function handleSaveDream() {
    dreams[params.id] = {...dreams[params.id], title: dreamTitle, dreamText:dreamNote}
    await AsyncStorage.setItem('@Dreams', JSON.stringify(dreams))
    
    toggleEditMode();
  }

  async function deleteDream(){
    dreams.splice(params.id, 1);
    await AsyncStorage.setItem('@Dreams', JSON.stringify(dreams));
    dispatch(goLanding);
  }

  function addTag(newTag: string) {
    let ver = true
    if(newTag == '') { ver = false }

    tags.forEach(tagAtual => {
      if(newTag === tagAtual) { ver = false }
    })
    if(ver == true) {
      setTags([...tags, newTag])
      setTag('')
    }
  }

  function removeTag(idx: number){
    const itensCopy = Array.from(tags);
    itensCopy.splice(idx, 1);
    setTags(itensCopy);
  }

  async function handleSaveTags() {
    dreams[params.id] = {...dreams[params.id], arrayTags: tags}
    await AsyncStorage.setItem('@Dreams', JSON.stringify(dreams))

    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <LinearGradient 
        style={styles.header}
        colors={['#4E14A8', '#8F27ED']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      > 
        <RectButton onPress={() => dispatch(goLanding)} >
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
            {editMode
            ?
              <RectButton onPress={deleteDream} style={styles.trashIcon}>
                <Image source={trash} style={{width: 14, height: 14}} ></Image>
              </RectButton>
            :
              <RectButton onPress={toggleEditMode} style={styles.editIcon}>
                <Image source={pencilIcon} style={{width: 14, height: 14}} ></Image>
              </RectButton>
            
            }
          </View>
          { editMode
            ?
            <TextInput onChangeText={setDreamNote} autoFocus value={dreamNote} multiline scrollEnabled style={styles.dreamText} />
            :
            <Text style={styles.dreamText} >{dreamNote}</Text>
          }
        </View>

        <View style={styles.contain}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.labelTag}>Tags</Text>
            <RectButton onPress={() => setModalVisible(true)} style={styles.editIcon}>
              <Image source={pencilIcon} style={{width: 14, height: 14}} ></Image>
            </RectButton>
          </View>
          <View style={styles.tagContainer}>
            {tags.map((tag: string, idx: number) => {
              return(
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                  <View style={styles.dotTag} />
                </View>
              )
            })}
        </View>
        </View>
      </ScrollView>
      {editMode && 
        <RectButton onPress={handleSaveDream} style={styles.confirmChangeButton}>
          <Image source={check} style={{width: 30, height: 30}} />
      </RectButton>
      }

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        style={{justifyContent: 'center', alignItems: 'center'}}
        transparent={true}
        animationType="fade"
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6);'}}>
          <View style={{width: '85%', backgroundColor: '#E5DAFC', borderRadius: 8, alignItems: 'center'}}>
            <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24, marginTop: 10}}>Tags</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible(false)} style={styles.xIcon}>
                <Image source={x} style={{width: 10, height: 10}} ></Image>
              </TouchableOpacity>
            </View>

            <View style={{width: '100%', flexDirection: 'row', marginBottom: 15}}>
              <TextInput maxLength={25} value={tag} onChangeText={setTag} placeholder="Sua tag" style={{flex: 9, padding: 12, backgroundColor: '#FBFBFB', height: 42, borderRadius: 8, marginHorizontal: 18 }} />
              <TouchableOpacity onPress={() => addTag(tag)} style={{flex: 2, height: 42, borderRadius: 8, backgroundColor: '#7923C7', elevation: 5, marginRight: 18, justifyContent: 'center', alignItems: 'center'}}>
                <AntDesign name="plus" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={{width: '95%', flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap'}}>
              {tags.map((tag, idx) => {
              return(
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                  <TouchableOpacity style={{width:20, height:20, alignItems: 'center', justifyContent: 'center'}} onPress={() => removeTag(idx) }>
                    <Ionicons name="ios-close" size={24} color="#555" />
                  </TouchableOpacity>
                </View>
              )
            })}
            </View>
 
            <TouchableOpacity activeOpacity={0.9} onPress={handleSaveTags} style={{width: '90%', backgroundColor: '#60E18F', height: 55, borderRadius: 8, elevation: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 30}}>
              <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24, color: '#FEFEFF'}}> Continuar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}