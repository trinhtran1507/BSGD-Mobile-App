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
import { Toast, Root, Form, Input, Item, Label} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import RNPickerSelect from 'react-native-picker-select';
import Picker from 'react-native-picker';

const year = new Date().getFullYear();

class BookApointmentInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGioKham: undefined,
            listGioKham: [
                {
                    label: '8:00',
                    value: '1',
                },
                {
                    label: '9:00',
                    value: '2',
                },
                {
                    label: '10:00',
                    value: '3',
                },
            ],
            selectedNamSinh: undefined,
            listNamSinh: [
                {
                    label: '1994',
                    value: '1',
                },
                {
                    label: '1994',
                    value: '2',
                },
                {
                    label: '1995',
                    value: '3',
                },
            ],
            selectedGioiTinh: undefined,
            listGioiTinh: [
                {
                    label: 'Nam',
                    value: 'F',
                },
                {
                    label: 'Nữ',
                    value: 'M',
                },
                {
                    label: 'Không xác định',
                    value: 'U',
                },
            ]
        };
    }
    onGioKhamChange = (value) =>{
        this.setState({
            selectedGioKham: value,
        });
    }
    onNamSinhChange = (value) =>{
        this.setState({
            selectedNamSinh: value,
        });
    }
    onGioiTinhChange = (value) =>{
        this.setState({
            selectedGioiTinh: value,
        });
    }
    render() {
        return (
            <Root>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                        <Form>
                             <Grid>
                                <Row>
                                    <Col>
                                        <RNPickerSelect
                                            placeholder={{
                                                    label: 'Chọn giờ khám',
                                                    value: null,
                                            }}
                                            onValueChange = {this.onGioKhamChange}
                                            items={this.state.listGioKham}
                                            style={{ ...pickerSelectStyles }}
                                            value={this.state.selectedGioKham}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Item floatingLabel last disabled>
                                            <Label>Họ và tên</Label>
                                            <Input/>
                                        </Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Item floatingLabel last>
                                        <Label>Số điện thoại</Label>
                                        <Input />
                                    </Item>
                                    </Col>
                                    <Col>
                                    <Item floatingLabel last>
                                        <Label>Số CMND</Label>
                                        <Input />
                                    </Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Item floatingLabel last>
                                            <Label>Số BHXH</Label>
                                            <Input />
                                        </Item>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Col>
                                        <RNPickerSelect
                                            placeholder={{
                                                    label: 'Chọn năm sinh',
                                                    value: null,
                                            }}
                                            onValueChange = {this.onNamSinhChange}
                                            items={this.state.listNamSinh}
                                            style={{ ...pickerSelectStyles }}
                                            value={this.state.selectedNamSinh}
                                        />
                                    </Col>
                                    <Col>
                                        <RNPickerSelect
                                            placeholder={{
                                                    label: 'Chọn giới tính',
                                                    value: null,
                                            }}
                                            onValueChange = {this.onGioiTinhChange}
                                            items={this.state.listGioiTinh}
                                            style={{ ...pickerSelectStyles }}
                                            value={this.state.selectedGioiTinh}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Item floatingLabel last>
                                            <Label>Địa chỉ</Label>
                                            <Input />
                                        </Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Item floatingLabel last>
                                            <Label>Lý do khám</Label>
                                            <Input />
                                        </Item>
                                    </Col>
                                </Row>
                            </Grid> 
                        </Form>
                        </View>
                    </View>
                </ScrollView>
            </Root>
        );
    }
}
export default BookApointmentInfoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        padding: 10,
    },
    textHeader: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000"
    },
    text:{
        color:'#000',
        fontSize:16,
        marginTop: 10,
        padding: 10,
    }
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});