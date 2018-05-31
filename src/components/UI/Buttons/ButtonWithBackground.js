import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, StyleSheet, Platform } from 'react-native';

const buttonWithBackground = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={{color:'#fff',fontSize: 18}}>
                {props.children}
            </Text>
        </View>
    );

    if(Platform.OS === 'android'){
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }
    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        padding: 7,
        margin: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#67c9e0",
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default buttonWithBackground;