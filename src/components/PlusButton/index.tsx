import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

export default function PlusButton() {
  const { navigate } = useNavigation()

  function handleNavigationToCreateDreams(){
    navigate('DreamTags')
  }

  return (
    <TouchableOpacity style={{width:'100%', height:'100%', borderRadius:40}} onPress={handleNavigationToCreateDreams}>
      <LinearGradient 
        colors={['#4F09BA', '#9F34FF']} 
        start={{x:0,y:0}}
        end={{x:1,y:1}}
        style={styles.linear}
        >
          <Feather name="plus" size={40} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linear: {
    width: 60,
    height: 60,
    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',
  }
})