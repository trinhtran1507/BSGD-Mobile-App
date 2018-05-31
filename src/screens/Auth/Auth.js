import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/Buttons/ButtonWithBackground";
import backgroundImage from "../../assets/appointment-bg.png";
import Icon from "react-native-vector-icons/Ionicons";
class AuthScreen extends Component {
  state = {
    respStyles: {
      pwContainerDirection: "column",
      pwContainerJustifyContent: "flex-start",
      pwWrapperWidth: "100%"
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", dims => {
      this.setState({
        respStyles: {
          pwContainerDirection:
            Dimensions.get("window").height > 500 ? "column" : "row",
          pwContainerJustifyContent:
            Dimensions.get("window").height > 500
              ? "flex-start"
              : "space-between",
          pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "45%"
        }
      });
    });
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    //let headingText = null;
    // if(Dimensions.get('window').height > 500) {
    //     headingText = (
    //         <MainText>
    //             <HeadingText>Log In</HeadingText>
    //         </MainText>
    //     );
    // }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="position"
          keyboardVerticalOffset={Platform.select({
            ios: () => 0,
            android: () => -64
          })()}
        >
          <View style={styles.container}>
            {/* {headingText}
                    <ButtonWithBackground color="#29aaf4" onPress={()=>alert("Hello World!")}>Switch to Login</ButtonWithBackground> */}
            <View style={styles.inputContainer}>
              <DefaultInput placeholder="Tài khoản" style={styles.input} />
              <View
                style={{
                  flexDirection: this.state.respStyles.pwContainerDirection,
                  justifyContent: this.state.respStyles
                    .pwContainerJustifyContent
                }}
              >
                <View style={{ width: this.state.respStyles.pwWrapperWidth }}>
                  <DefaultInput placeholder="Mật khẩu" style={styles.input} />
                </View>
                {/* <View style={{width: this.state.respStyles.pwWrapperWidth}}>
                                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                            </View> */}
                <ButtonWithBackground
                  color="#67c9e0"
                  onPress={this.loginHandler}
                >
                  Đăng nhập
                </ButtonWithBackground>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#67c9e0"
  },
  backgroundImage: {
    width: "100%",
    flex: 1,
    justifyContent:'center',
    alignItems: "center",
  },
  passwordContainer: {
    flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
    width: Dimensions.get("window").height > 500 ? "100%" : "45%"
  }
});

export default AuthScreen;
