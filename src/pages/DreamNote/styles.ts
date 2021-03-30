import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F2ECFF', 
    alignItems: 'center'
  }, 
  
  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  image: {
    marginTop:'8%', 
    width: 90, 
    height: 51
  },

  backIcon: {
    marginTop: 24, 
    marginLeft: 10
  },

  scrollView: {
    alignItems: 'center', 
    width: '100%'
  },

  dreamContainer: {
    marginTop: 30, 
    width: Dimensions.get('screen').width*0.85, 
    height: 'auto', 
    minHeight: 300, 
    backgroundColor: '#FFB775', 
    borderRadius: 13
  },

  title: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24, 
    marginLeft: 16,
    width: '80%',
    marginTop: 10,
  },

  editIcon: {
    marginTop: 12, 
    marginRight: 16, 
    width: 26, 
    height: 26, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderRadius: 13, 
    elevation: 3
  },

  dreamText: {
    fontFamily: 'Poppins_500Medium', 
    fontSize: 16, 
    marginHorizontal: 15, 
    marginTop: 10, 
    marginBottom: 20,
    height: 'auto'
  },

  contain: {
    width: Dimensions.get('screen').width*0.9, 
    marginTop: 15
  },

  labelTag: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24, 
    marginHorizontal: 16, 
    marginTop: 10
  },

  tagContainer: {
    width: Dimensions.get('screen').width*0.9, 
    marginTop: 5, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginBottom: 80
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
    color: '#000',
    marginRight: 3
  },

  dotTag: {
    width:6, 
    height: 6, 
    borderRadius: 3, 
    backgroundColor: '#543918', 
    marginRight: 5
  },
})

export default styles;