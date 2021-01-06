import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#E5DAFC', 
    flex:1, 
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

  infoText: {
    fontFamily: 'Montserrat_400Regular', 
    fontSize: 18, 
    color: '#9166B8'
  },

  spanText: {
    fontFamily: 'Montserrat_400Regular', 
    fontSize: 14, 
    color: '#AC88CC', 
    marginTop: 5
  },

  textInput: {
    flex: 8, 
    height: 45, 
    backgroundColor: '#FBFBFB', 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    marginRight: 10,
    fontFamily: 'Montserrat_400Regular'
  },

  addTagsButton: {
    flex: 1,
    height: 45, 
    backgroundColor: '#38107A', 
    borderRadius: 15, 
    padding: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  plusText: {
    fontFamily: 'Comfortaa_700Bold', 
    fontSize: 44, 
    color: '#fff', 
    marginTop: -10
  },

  continueButton: {
    width: '90%', 
    height: 55, 
    backgroundColor: '#60E18F', 
    borderRadius: 15, 
    padding: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  continueText: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 24, 
    color: '#fff'
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
    marginBottom: 14
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
  }
});

export default styles