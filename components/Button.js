/*
* File: Button.js
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-04-17
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

import React from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native'

const Button = (props) => {
  return (
    <TouchableHighlight 
    style={styles.button}
    onPress={props.onPress}
    >
        <Text style={styles.buttonText}>Calculate Weight</Text>
    </TouchableHighlight>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00F395',
        padding: 15,
        borderRadius: 5,
        margin: 30,
        borderRadius: '30px',
        width: '55%',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },  
});