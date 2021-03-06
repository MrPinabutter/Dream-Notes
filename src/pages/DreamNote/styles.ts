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
    backgroundColor: '#D6BFF8', 
    borderRadius: 13
  },

  dreamContent: {
    justifyContent: 'space-between', 
    flexDirection: 'row'
  },

  title: {
    marginLeft: 16,
    width: '80%',
    marginTop: 10,
    fontFamily: 'Poppins_500Medium',
    fontSize: 24, 
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

  trashIcon: {
    marginTop: 12, 
    marginRight: 16, 
    width: 26, 
    height: 26, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FF5454', 
    borderRadius: 13, 
    elevation: 3
  },

  xIcon: {
    marginTop: 12, 
    width: 26, 
    height: 26, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderRadius: 13, 
    elevation: 3
  },

  iconsContainer: {
    marginTop: 12, 
    marginRight: 16, 
    width: 26, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  dreamText: {
    fontFamily: 'Poppins_300Light', 
    fontSize: 16, 
    marginHorizontal: 15, 
    marginTop: 10, 
    marginBottom: 20,
    includeFontPadding: false,
    paddingVertical: 0
  },

  contain: {
    width: Dimensions.get('screen').width*0.9, 
    marginTop: 15
  },

  tagContent: {
    flexDirection: 'row', 
    alignItems: 'center'
  },

  labelTag: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24, 
    marginHorizontal: 16, 
    marginTop: 10,
  },

  tagContainer: {
    width: Dimensions.get('screen').width*0.8, 
    marginTop: 8, 
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
    elevation: 5
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
    width:5, 
    height: 5, 
    borderRadius: 3, 
    // backgroundColor: '#000', 
    marginRight: 5
  },

  confirmChangeButton: {
    position: 'absolute', 
    top: Dimensions.get('screen').height *0.85, 
    left: Dimensions.get('screen').width * 0.9 - 60, 
    elevation: 4, backgroundColor: '#60E18F', 
    borderRadius: 100,
    width: 80, 
    height: 80, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  modal: {
    justifyContent: 'center', 
    alignItems: 'center'
  },

  editTagModalContainer: {
    width: '85%', 
    backgroundColor: '#E5DAFC', 
    borderRadius: 8, 
    alignItems: 'center'
  },

  editModalContent: {
    width: '90%', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },

  addTagContainer: {
    width: '100%', 
    flexDirection: 'row', 
    marginBottom: 15
  },

  addTagInput: {
    flex: 9, 
    padding: 12, 
    backgroundColor: '#FBFBFB', 
    height: 42, 
    borderRadius: 8, 
    marginHorizontal: 18
  },

  addTag: {
    flex: 2, 
    height: 42, 
    borderRadius: 8, 
    backgroundColor: '#7923C7', 
    elevation: 5, 
    marginRight: 18, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  tagEditContainer: {
    width: '95%', 
    flexDirection: 'row', 
    marginBottom: 10, 
    flexWrap: 'wrap'
  },

  editTagTitle: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24, 
    marginTop: 10
  },

  closeModalEditTag: {
    width:20, 
    height:20, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  confirmTagEdit: {
    width: '90%', 
    backgroundColor: '#60E18F', 
    height: 55, 
    borderRadius: 8, 
    elevation: 5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 30
  },

  confirmTagEditText: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24, 
    color: '#FEFEFF'
  },
  
  modalContainer: {
    flex: 1, 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6);'
  },

  removeDreamContainer: {
    width: '85%', 
    height: 160, 
    backgroundColor: '#E5DAFC', 
    borderRadius: 8, 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },

  removeDreamTextContainer: {
    width: '100%', 
    paddingHorizontal: 20
  },

  removeDreamTitle: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 28, 
    lineHeight: 38, 
    marginTop: 15, 
    color: '#360562'
  },

  removeDreamSubitle: {
    fontFamily: 'Poppins_300Light', 
    fontSize: 16, 
    lineHeight: 20, 
    color: '#360562'
  },

  removeButtonCancel: {
    flex: 1, 
    marginLeft: 5,
    marginRight: 20,
    height: 50, 
    backgroundColor: '#F5F1FD', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },

  removeButtonConfirm: {
    flex: 1, 
    marginLeft: 20,
    marginRight: 5, 
    height: 50, 
    backgroundColor: '#FF5454', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },

  removeTextYes: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24,  
    color: '#fff',
  },

  removeTextNo: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 24,  
    color: '#1D0235',
  }
})

export default styles;