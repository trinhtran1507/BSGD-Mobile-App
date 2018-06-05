import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { List, ListItem, Avatar, Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import CircleButton from "react-native-circle-button";
var widthGrid =
  Dimensions.get("window").width - Dimensions.get("window").width * 0.99;
var widthContent =
  Dimensions.get("window").width - Dimensions.get("window").width * 0.99;
class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }
  onPress = () => {
    this.props.navigator.push({
      screen: "BSGD.BookApointmentScreen",
      animationType: "fade", // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      navigatorStyle: {
        navBarBackgroundColor: "#fff",
        navBarTextColor: "#fff",
        navBarButtonColor: "#000",
        navBarTitleTextCentered: true
      }
    });
  };
  render() {
    const list = [
      {
        name: "Ths.Nguyễn Thị Diệu Anh",
        avatar_url: require("../../assets/doctor-1.jpg"),
        chuyenkhoa: "Tim mạch",
        mota: "Chuyên gia về tim mạch hàng đầu"
      },
      {
        name: "Ths.Phan Tuấn Hùng",
        avatar_url: require("../../assets/doctor-2.jpg"),
        chuyenkhoa: "Tim mạch",
        mota: "Chuyên gia về tim mạch hàng đầu"
      },
      {
        name: "Ths.Trần Thị Anh Nhi",
        avatar_url: require("../../assets/doctor-3.jpg"),
        chuyenkhoa: "Tim mạch",
        mota: "Chuyên gia về tim mạch hàng đầu"
      },
      {
        name: "Ths.Phó Đức Chính",
        avatar_url: require("../../assets/doctor-4.jpg"),
        chuyenkhoa: "Tim mạch",
        mota: "Chuyên gia về tim mạch hàng đầu"
      },
      {
        name: "Ths.Phó Đức Chính",
        avatar_url: require("../../assets/doctor-4.jpg"),
        chuyenkhoa: "Tim mạch",
        mota: "Chuyên gia về tim mạch hàng đầu"
      },
      {
        name: "Ths.Phó Đức Chính",
        avatar_url: require("../../assets/doctor-4.jpg"),
        chuyenkhoa: "Tim mạch",
        mota: "Chuyên gia về tim mạch hàng đầu"
      },
      {
        name: "Ths.Phó Đức Chính",
        avatar_url: require("../../assets/doctor-4.jpg"),
        chuyenkhoa: "Tim mạch",
        mota: "Chuyên gia về tim mạch hàng đầu"
      }
    ];
    return (
      <ScrollView>
        <View style={styles.container}>
          <List
            containerStyle={{ marginTop: 0, backgroundColor: "transparent" }}
          >
            {list.map((l, i) => (
              <ListItem
                containerStyle={{ backgroundColor: "#fff",margin:5,borderRadius:6,padding:0}}
                key={i}
                //hideChevron={true}
                subtitle={
                  <Grid>
                    <Row>
                        <Col size ={1}>
                            <Row style={styles.leftSub1}>
                                <Avatar
                                large
                                //rounded
                                source={{
                                    uri:
                                    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                                }}
                                activeOpacity={0.7}
                                avatarStyle={{
                                    borderRadius: 10,
                                }}
                                overlayContainerStyle={{
                                    borderRadius: 10
                                }}
                                />
                            </Row>
                        </Col>
                        <Col size={2}>
                            <Row style={styles.rightSub1}>
                                <View>
                                    <Text>{l.name}</Text>
                                    <Text>Chuyên khoa: {l.chuyenkhoa}</Text>
                                    <Text>{l.mota}</Text>
                                </View>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row style={styles.leftSub2}>
                                <View>
                                    <Image
                                    source={require("../../assets/rating.png")}
                                    style={styles.ratingImage}
                                    />
                                    <Text style={styles.ratingText}>5 tháng trước</Text>
                                </View>
                                
                            </Row>
                        </Col>
                        <Col>
                            <Row style={styles.rightSub2}>
                                <Button
                                rounded
                                onPress={this.onPress}
                                iconRight={{ name: "md-calendar", type: "ionicon" }}
                                title="BOOK"
                                backgroundColor="#6F6CCD"
                                fontSize={12}
                                buttonStyle={{
                                    justifyContent: "center",
                                    padding:5,
                                }}
                                />
                            </Row>
                        </Col>
                    </Row>
                      {/* <Row>
                      <Col style={styles.leftSub}>
                        <Avatar
                          large
                          //rounded
                          source={{
                            uri:
                              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                          }}
                          activeOpacity={0.7}
                          avatarStyle={{
                            borderRadius: 10,
                          }}
                          overlayContainerStyle={{
                            borderRadius: 10
                          }}
                        />
                      </Col>
                      <Col style={styles.middleSub}>
                        <Text>{l.name}</Text>
                        <Text>Chuyên khoa: {l.chuyenkhoa}</Text>
                        <Image
                          source={require("../../assets/rating.png")}
                          style={styles.ratingImage}
                        />
                        <Text style={styles.ratingText}>5 tháng trước</Text>
                      </Col>
                      <Col style={styles.rightSub}>
                        <Button
                          rounded
                          onPress={this.onPress}
                          icon={{ name: "md-calendar", type: "ionicon" }}
                          title="BOOK"
                          backgroundColor="#6F6CCD"
                          fontSize={12}
                          buttonStyle={{
                            justifyContent: "center",
                            padding:5,
                          }}
                        />
                      </Col>
                      </Row> */}
                  </Grid>
                }
              />
            ))}
          </List>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  subtitleView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
    //justifyContent: 'space-between'
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    color: "grey"
  },
  textHeader: {
    fontSize: 18,
    fontWeight: "bold"
  },
  textNormal: {
    fontSize: 16
  },
  leftSub1: {
    borderRadius: 10,
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  rightSub1: {
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  leftSub2: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: 5
  },
  rightSub2: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    alignItems: 'center',
  }
});

export default SearchScreen;
