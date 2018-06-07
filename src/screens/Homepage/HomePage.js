import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image,TouchableOpacity,Platform,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
class HomePage extends Component {
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = event => {
      if(event.type === "NavBarButtonPress"){
          if(event.id === "sideDrawerToggle"){
              this.props.navigator.toggleDrawer({
                  side: "left"
              });
          }
      }
  }
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                  <View style={styles.containerImage}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../assets/appointment-bg.png')} />
                  </View>
                  <View style={styles.containerSearch}>
                    <MainText><HeadingText>Tra cứu thông tin khám chữa bệnh</HeadingText></MainText>
                    {/* <View style={styles.containerSearchButton}> */}
                    <TouchableOpacity style ={styles.button}>
                        <Text style ={styles.textButton}>Tra cứu Cơ sở y tế</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.button}>
                        <Text style ={styles.textButton}>Tra cứu Bác sĩ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.button}>
                        <Text style ={styles.textButton}>Tra cứu cơ sở y tế gần nhất</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                  </View>
                  <View style={styles.containerIntroduce}>

                  </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center'
    },
    containerImage:{
      flex: 1,
      //alignItems: 'center'
    },
    containerIntroduce:{

    },
    containerSearch:{
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
      marginTop:20,
      marginLeft: 10,
      marginRight: 10
    },
    image: {
      width:"100%",
      height: Dimensions.get("window").height * 0.3
    },

    button:{
        flex: 1,
        backgroundColor: '#f15b5a',
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
    }
});

export default HomePage; 