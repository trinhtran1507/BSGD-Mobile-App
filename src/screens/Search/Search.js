import React, { Component } from 'react';
import { View, Text,Picker, TextInput, Button, StyleSheet, ScrollView, Image,TouchableOpacity,Platform,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
class SearchScreen extends Component {
    constructor(props){
        super(props);
        this.state= {
            language: "0"
    }
  }
  onPress = () =>{
    this.props.navigator.push({
        screen: 'BSGD.ListDoctorScreen',
        animated: true,
        animationType: 'fade',
        title: "Danh sách Bác sĩ",
        // navigatorStyle: {
        //     tabBarHidden: true
        // }
    });
  }
    render(){
        return (
                <View style={styles.container}>
                  <View style={styles.containerSearch}>
                    <View style={{alignItems:'center',marginBottom:20}}>
                        <Text style={styles.textHeader}>Tra cứu Bác sĩ, Cơ sở y tế</Text>
                    </View>
                    <View style={{marginBottom:20}}>
                    <TextInput 
                        placeholder="Nhập tên Bác sĩ" 
                        underlineColorAndroid="transparent"
                        placeholderTextColor = "#53565c"
                        style={styles.input}
                    />
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={this.state.language}
                            mode ="dropdown"
                            style={{width: '100%'}}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Bác sĩ" value="0" />
                            <Picker.Item label="Cơ sở y tế" value="1" />
                        </Picker>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={this.state.language}
                            mode ="dropdown"
                            style={{width: '100%',borderBottomColor:'#000',borderWidth:2 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Chuyên khoa" value="0" />
                            <Picker.Item label="Tim mạch" value="1" />
                        </Picker>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={this.state.language}
                            mode ="dropdown"
                            style={{width: '100%',borderBottomColor:'#000',borderWidth:2 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Tỉnh/thành phố" value="0" />
                            <Picker.Item label="Hồ Chí Minh" value="1" />
                        </Picker>
                    </View>
                    <TouchableOpacity style ={styles.button} onPress={this.onPress}>
                            <Text style ={styles.textButton}><Icon name = {Platform.OS === "android" ? "md-search" : "ios-search"} size={20} color={'#fff'}/> Tìm kiếm</Text>
                    </TouchableOpacity>
                  </View>
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
    containerTitle:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center',
    },
    containerSearch:{
      flex: 1,
      marginTop:20,
      marginLeft: 10,
      marginRight: 10,
      padding:10,
    },
    button:{
        backgroundColor: '#67c9e0',
        borderRadius: 6,
        justifyContent:'center',
        alignItems: 'center',
        width:'100%',
        padding: 10,
        marginTop: 20,
    },
    textButton:{
        color:'#fff',
        fontSize: 18,
    },
    input:{
        width:'100%',
        borderBottomColor:'#ccc',
        borderLeftColor: '#67c9e0',
        borderRightColor: '#ccc',
        borderTopColor: '#ccc',
        borderLeftWidth:5,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        paddingLeft:20,
        fontSize:16,
        borderRadius: 4,
    },
    picker:{
        marginTop:10,
        borderBottomColor:'#ccc',
        borderLeftColor: '#67c9e0',
        borderRightColor: '#ccc',
        borderTopColor: '#ccc',
        borderLeftWidth:5,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        paddingLeft:20
    },
    textHeader:{
        fontSize:20,
        color:'#67c9e0',
        fontWeight: 'bold',
    }
});

export default SearchScreen; 