import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    
      },
    
      titles:{
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      
      title: {
        fontSize: 40,
        fontWeight: 'bold',
      },
    
      subtitle: {
        fontSize:25,
        fontWeight: 'normal',
        color: '#5e5c62'
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
      }
});

export default styles;

