import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,TouchableOpacity,Dimensions,TextInput,Button,Modal } from 'react-native';
import { connect } from 'react-redux';
import { Calendar, CalendarList, Agenda,Arrow } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import PlaceList from '../../components/PlaceList/PlaceList';
import Icon from "react-native-vector-icons/Ionicons";
import startMainTabs from "../MainTabs/startMainTabs";
var screen = Dimensions.get('window');
class FindPlaceScreen extends Component {
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        LocaleConfig.locales['vn'] = {
            monthNames: ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
            monthNamesShort: ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
            dayNames: ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ Nhật'],
            dayNamesShort: ['T2.','T3.','T4.','T5.','T6.','T7.','CN.']
          };
          
        LocaleConfig.defaultLocale = 'vn';
        this.state = {
            modalVisible: false
          };
        this.onDayPress = this.onDayPress.bind(this);
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        this.props.navigator.push({
            screen: "BSGD.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        });
    }
    onDayPress = (day) => {
        //alert(JSON.stringify(day))
        this.setModalVisible(true);
        this.setState({
          selected: day.dateString
        });
      }
    render(){
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');}}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.toolbar}>
                            <Text style={styles.toolbarButton} onPress={() => { this.setModalVisible(!this.state.modalVisible);}}><Icon name="md-close" size={25} color="#fff" /></Text>
                            <Text style={styles.toolbarTitle}>Thông tin đặt lịch khám</Text>
                            <Text style={styles.toolbarButton}><Icon name="md-checkmark-circle-outline" size={25} color="#fff" /></Text>
                        </View>
                        <View style={styles.content}>
                            <TextInput/>
                        </View>
                        {/* <View style ={styles.headerModal}>
                        <TouchableOpacity 
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);}}
                            style ={{flex:.4}}
                        >
                            <Icon name="md-close" size={30} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => { this.setModalVisible(!this.state.modalVisible);}}
                            style ={{flex:.6, justifyContent:'flex-end'}}
                        >
                            <Text>LƯU</Text>
                        </TouchableOpacity>
                        </View> */}
                    </View>
                </Modal>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: false, selectedDotColor: 'orange'}}}
            />
          </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);
const styles = StyleSheet.create({
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    },
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    modalContainer:{
        flex: 1
    },
    toolbar:{
        backgroundColor:'#67c9e0',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,                //Step 3
        fontSize: 16,
    },
    content:{
        backgroundColor:'#fff',
        flex:1 
    }
  });