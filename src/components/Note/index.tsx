import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Note() {
  return (
    <View style={styles.note}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Titulo</Text>
      </View>
      <View style={{padding: 15, paddingTop:10, overflow: 'hidden', height: 140}}>
        <Text style={{fontFamily: 'PatrickHand_400Regular', color: '#52503E'}}>
          Descrição bacanuda do meu sonho q tive hoje a noite q foi muito bizarro se liga so, a gnt tem que correr atras de um carro
          Descrição bacanuda do meu sonho q tive hoje a noite q foi muito bizarro se liga so, a gnt tem que correr atras de um carro
          Descrição bacanuda do meu sonho q tive hoje a noite q foi muito bizarro se liga so, a gnt tem que correr atras de um carro
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  note:{
    width: '37%',
    height: 200,
    backgroundColor: '#E8DDA5',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#918F6E'
  },

  title:{
    width: '100%', 
    height:45, 
    backgroundColor: '#D1C194', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderTopEndRadius: 15, 
    borderTopLeftRadius: 15
  },

  titleText: {
    color:'#fff', 
    fontFamily: 'AutourOne_400Regular', 
    fontSize: 16
  }
});
