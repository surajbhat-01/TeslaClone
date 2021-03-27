import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    return(
        <View style={styles.carContainer}>

        <ImageBackground
          source={require('../../assets/images/ModelS.jpeg')} 
          style={styles.image}/>
        
        <View style={styles.titles}>
          <Text style={styles.title}> Model S</Text>
          <Text style={styles.subtitle}> Starting at $69,420</Text>
        </View>


        <StyledButton type = 'primary' message='Custom Order'/>

        <StyledButton type = 'secondary' message='Learn More'/>

      </View>
    );
};

export default CarItem;