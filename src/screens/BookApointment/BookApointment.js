import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { Calendar, CalendarList, Agenda, Arrow } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Icon from "react-native-vector-icons/Ionicons";
import { Button, Avatar } from "react-native-elements";
import { Toast, Root,Picker,Form} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
class BookApointmentScreen extends Component {
    constructor(props) {
        super(props);
        LocaleConfig.locales["vn"] = {
            monthNames: [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            monthNamesShort: [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            dayNames: [
                "Thứ 2",
                "Thứ 3",
                "Thứ 4",
                "Thứ 5",
                "Thứ 6",
                "Thứ 7",
                "Chủ Nhật"
            ],
            dayNamesShort: ["T2.", "T3.", "T4.", "T5.", "T6.", "T7.", "CN."]
        };
        LocaleConfig.defaultLocale = "vn";
        this.state = {
            currentPosition: 0,
            selected: undefined
        };
    }
    onValueChange(value) {
        this.setState({
          selected: value
        });
    }
    onDayPress = day => {
        //alert("Hello");
        this.props.navigator.push({
            title:'THÔNG TIN ĐĂNG KÝ',
            screen: "BSGD.BookApointmentInfoScreen",
            animationType: "fade", // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
            navigatorStyle: {
              navBarBackgroundColor: "#fff",
              navBarTextColor: "#000",
              navBarButtonColor: "#000",
              navBarTitleTextCentered: true,
              tabBarHidden: true,
              //navBarHidden: true
            }
          });
    };
    onDangKyPress = () => {
        // Toast.show({
        //     text: "Đăng ký khám bệnh thành công!",
        //     position: "bottom",
        //     type: "success"
        //     //buttonText:"Okay",
        //     //duration:5000,
        //     // onClose: ()=> {
        //     //     alert ('OK');
        //     // }
        // });
        this.props.navigator.push({
            title:'ĐĂNG KÝ KHÁM BỆNH',
            screen: "BSGD.BookApointmentInfoScreen",
            animationType: "fade", // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
            navigatorStyle: {
              navBarBackgroundColor: "#fff",
              navBarTextColor: "#fff",
              navBarButtonColor: "#000",
              navBarTitleTextCentered: true
              //navBarHidden: true
            }
          });
    };
    OnBackPress = () => {
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
    }
    render() {
        return (
            <Root>
                <ScrollView>
                    <View>
                        <View style = {{justifyContent:'space-between', padding:10,alignItems:'center'}}>
                            <Avatar
                                large
                                rounded
                                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />
                        </View>
                            
                        <View style = {{justifyContent:'space-between', padding:10,alignItems:'center'}}>
                            <Text>Lịch làm việc của</Text>
                            <Text>Ths.Nguyễn Thị Diệu Anh</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <CalendarList
                            onDayPress={this.onDayPress}
                            markedDates={{
                                "2018-06-24": {
                                    startingDay: true,
                                    color: "green",
                                    textColor: "#fff"
                                },
                                "2018-06-25": { color: "green", textColor: "#fff" },
                                "2018-06-26": {
                                    endingDay: true,
                                    color: "green",
                                    textColor: "#fff"
                                },
                                "2018-06-21": {
                                    startingDay: true,
                                    color: "orange",
                                    textColor: "#fff"
                                },
                                "2018-06-22": { color: "orange", textColor: "#fff" },
                                "2018-06-23": {
                                    endingDay: true,
                                    color: "orange",
                                    textColor: "#fff"
                                },
                                "2018-06-04": {
                                    startingDay: true,
                                    color: "orange",
                                    endingDay: true,
                                    textColor: "#fff"
                                }
                            }}
                            markingType={"period"}
                            style={styles.calendar}
                            monthFormat={"MMMM - yyyy"}
                            hideExtraDays
                            horizontal={true}                    
                         />
                    </View>
                </ScrollView>
                {/* <View style={{position:'absolute', bottom:0,padding:10,backgroundColor:'transparent',left:0,right:0}}>
                    <Button
                        title="ĐĂNG KÝ KHÁM"
                        color="#fff"
                        backgroundColor="#67c9e0"
                        borderRadius={10}
                        containerViewStyle={{
                            marginLeft: null,
                            marginRight: null
                        }}
                        fontWeight="bold"
                        fontSize={16}
                        onPress = {this.onDangKyPress}
                    />
                </View> */}
            </Root>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         places: state.places.places
//     };
// };

export default BookApointmentScreen;

const styles = StyleSheet.create({
    calendar: {
        padding: 0,
        marginBottom: 0,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    modalContainer: {
        flex: 1
    },
    content: {
        backgroundColor: "#fff",
        flex: 1
    },
    picker: {
        marginTop: 10,
        borderBottomColor: "#ccc",
        borderLeftColor: "#67c9e0",
        borderRightColor: "#ccc",
        borderTopColor: "#ccc",
        borderLeftWidth: 5,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingLeft: 20,
        borderRadius: 4
    },
    input: {
        marginTop: 10,
        width: "100%",
        borderBottomColor: "#ccc",
        borderLeftColor: "#67c9e0",
        borderRightColor: "#ccc",
        borderTopColor: "#ccc",
        borderLeftWidth: 5,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 4
    },
    textHeader: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000"
    }
});
