import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;
    const msg = props.message;
    console.warn(type);

    const backgroundColor = type === 'primary'? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';
    return(
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Pressable
            style = {styles.button}
            onPress = {() => {
                console.warn('Hey There!')
            }}  

            >

                <Text style = {[styles.text, {color: textColor}]}>{msg}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;