import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  inputContainer: {
    width: '70%',
    height: 50,
    borderRadius:15,
    backgroundColor: '#f5f5f5',
    paddingLeft: 15
  },

  date:{
    fontFamily: 'Nunito_400Regular',
    color: '#D8AFF4',
    fontSize: 24
  },

  textDate:{
    fontFamily: 'Nunito_400Regular',
    marginTop:'6%',
    marginLeft: '5%',
  },

  registrados:{
    fontFamily: 'Nunito_400Regular',
    color:'#A17AC5',
    fontSize: 14,
    fontWeight: '200',
  },

  notesContainer:{
    width: '100%',
    marginTop: 34,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})

export default styles;