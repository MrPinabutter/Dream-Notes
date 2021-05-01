import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  note:{
    width: '40%',
    height: 220,
    backgroundColor: '#FF8675',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  container: {
    flex:1, 
    paddingBottom: 20, 
    overflow: 'hidden'
  },

  dreamContent: {
    padding: 15, 
    paddingTop: 8, 
    overflow: 'hidden', 
    height: 'auto'
  },

  title: {
    fontFamily: 'Nunito_700Bold', 
    color: '#150326', 
    fontSize: 18
  },

  body: {
    fontFamily: 'Poppins_300Light', 
    color: '#1A072C', 
    fontSize: 14
  },
});

export default styles;