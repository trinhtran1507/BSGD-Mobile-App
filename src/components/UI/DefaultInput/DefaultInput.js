import React from 'react';
import {TextInput, StyleSheet,View} from 'react-native';
const defaultInput = props => (
    <TextInput 
        underlineColorAndroid="transparent"
        {...props}{...props}
        style={[styles.input, props.style]} 
    />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 2,
        borderColor: '#67c9e0',
        padding: 7,
        paddingLeft: 20,
        margin: 8,
        borderRadius: 20,
        fontSize: 18,
    }
});

export default defaultInput;