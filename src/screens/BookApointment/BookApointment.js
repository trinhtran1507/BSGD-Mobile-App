import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Picker,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { Calendar, CalendarList, Agenda, Arrow } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Icon from "react-native-vector-icons/Ionicons";
import { Toast, Root } from "native-base";
import { Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
class BookApointmentScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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
            currentPosition: 0
        };
        //   this.props.navigator.setButtons({
        //     rightButtons: [
        //         {
        //             title: 'ĐĂNG KÝ',
        //             buttonColor:'#fff',
        //             buttonFontWeight: '600'
        //         }
        //     ]
        //   });
    }
    onDayPress = day => {
        //alert(JSON.stringify(day))
        this.setState({
            selected: day.dateString
        });
    };
    onDangKyPress = () => {
        Toast.show({
            text: "Đăng ký khám bệnh thành công!",
            position: "bottom",
            type: "success"
            //buttonText:"Okay",
            //duration:5000,
            // onClose: ()=> {
            //     alert ('OK');
            // }
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
                    <View style={styles.container}>
                        <Calendar
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
                        />
                    </View>
                    <View style={{ padding: 10 ,backgroundColor:'transparent'}}>
                            <View>
                                <Text style={styles.textHeader}>
                                    Thông tin đăng ký khám bệnh
                                </Text>
                            </View>
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={this.state.language}
                                    mode="dropdown"
                                    style={{ width: "100%" }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ language: itemValue })
                                    }
                                >
                                    <Picker.Item label="08:30" value="0" />
                                    <Picker.Item label="09:00" value="1" />
                                    <Picker.Item label="09:30" value="2" />
                                    <Picker.Item label="10:00" value="3" />
                                    <Picker.Item label="10:30" value="4" />
                                    <Picker.Item label="11:00" value="5" />
                                </Picker>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <TextInput
                                    placeholder="Họ tên"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#53565c"
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="Số điện thoại"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#53565c"
                                    style={styles.input}
                                />
                            </View>
                            <View>
                                <Button
                                    title="ĐĂNG KÝ KHÁM"
                                    color="#fff"
                                    backgroundColor="#67c9e0"
                                    borderRadius={6}
                                    containerViewStyle={{
                                        marginLeft: null,
                                        marginRight: null
                                    }}
                                    fontWeight="bold"
                                    fontSize={16}
                                    onPress = {this.onDangKyPress}
                                />
                            </View>
                        </View>
                </ScrollView>
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
        padding: 5
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
