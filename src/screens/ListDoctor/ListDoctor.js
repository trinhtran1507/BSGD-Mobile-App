import React, { Component } from 'react';
import { View, Text,Picker, TextInput, Button, StyleSheet, ScrollView, Image,TouchableOpacity,Platform,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
class SearchScreen extends Component {
    constructor(props){
        super(props);
  }
    render(){
        return (
                <View style={styles.container}>
                  <Text>This is list doctor page</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center'
        backgroundColor: '#fff',
    },
});

export default SearchScreen; 