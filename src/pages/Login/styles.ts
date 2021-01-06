import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  logo:{
    width: 270,
    height: 215,
    marginTop: '50%'
  },

  logoText:{
    fontSize:48,
    color: '#B093C9',
    fontFamily: 'Comfortaa_700Bold'
  },

  button:{
    width: '70%',
    height: 50,
    borderRadius:15,
    backgroundColor: '#4D52DB',

    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },

  inputContainer: {
    width: '70%',
    height: 50,
    borderRadius:15,
    backgroundColor: '#f5f5f5',
    paddingLeft: 15,
    fontFamily: 'Montserrat_400Regular'
  }, 

  label:{
    fontSize: 24,
    fontFamily: 'Montserrat_400Regular',
    color: '#B093C9',
    marginLeft: '-45%',
    marginBottom: 10
  }
})

export default styles;