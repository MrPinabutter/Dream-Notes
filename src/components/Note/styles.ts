import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  note:{
    width: '40%',
    height: 260,
    backgroundColor: '#FBFBFB',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#310D69',
    overflow: 'hidden',
  },

  title:{
    width: '100%', 
    height: 'auto',
    backgroundColor: '#5516B5', 
    justifyContent: 'center', 
    borderTopEndRadius: 10, 
    borderTopLeftRadius: 10,
  },

  titleText: {
    color:'#fff', 
    fontFamily: 'AutourOne_400Regular', 
    fontSize: 16,
  }
});

export default styles;