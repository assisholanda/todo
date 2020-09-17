import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  card: { 

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '95%',
    marginVertical: 10,
    height: 80,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation:5,
    borderRadius: 10

  },

  
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  typeActivity: {
    width: 50,
    height: 50
  },

  cardTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize:15
  }, 

  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },

  carDate: {
    color: '#FF8000',
    fontWeight: 'bold'
  },

  carTime: {
    color: '#707070'
  },

  done: {
    opacity: 0.5
  }
  

}); // FIM DA CONSTANTE STYLES

export default styles;