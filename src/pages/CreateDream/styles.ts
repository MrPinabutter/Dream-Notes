import { StyleSheet } from 'react-native';

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
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24, 
    color: '#5E4278'
  },

  titleContainer: {
    width: '90%', 
    marginBottom: 10, 
    marginTop: 5
  },

  dreamTitleContainer: {
    width: '90%', 
    marginBottom: 10
  },

  titleText: {
    fontFamily: 'Nunito_700Bold', 
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
    fontFamily: 'Nunito_400Regular'
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
    fontFamily: 'Poppins_400Regular',
  },

  tagLabel: {
    width: '90%', 
    marginBottom: 10, 
    marginTop: 5
  },

  tagContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    width: '100%'
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

  tagDot: {
    width:6, 
    height: 6, 
    backgroundColor: '#3D3926', 
    borderRadius: 10, 
    marginRight: 5
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
    fontFamily: 'Poppins_500Medium',
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
    marginTop: 30,
    marginBottom: 20,
    elevation: 4
  },

  continueText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24, 
    color: '#fff'
  },
})

export default styles;