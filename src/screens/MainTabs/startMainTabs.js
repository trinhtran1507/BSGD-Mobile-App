import { Navigation } from 'react-native-navigation';
import {Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === "android" ? "md-home" : "ios-home", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-search" : "ios-search", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-contact" : "ios-contact", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen: "BSGD.HomePageScreen",
                    label: "Trang chủ",
                    title: "Trang chủ",
                    icon: sources[0],
                    navigatorStyle: {
                        navBarHidden: true
                    }
                    // navigatorButtons: {
                    //     leftButtons: [
                    //         {
                    //             icon: sources[2],
                    //             title: "Menu",
                    //             id: "sideDrawerToggle"
                    //         }
                    //     ]
                    // }
                },
                {
                    screen: "BSGD.SearchScreen",
                    label: "Tìm kiếm",
                    title: "Tìm kiếm",
                    icon: sources[1],
                    navigatorStyle: {
                        navBarHidden: true
                    }
                    // navigatorButtons: {
                    //     leftButtons: [
                    //         {
                    //             icon: sources[2],
                    //             title: "Menu",
                    //             id: "sideDrawerToggle"
                    //         }
                    //     ]
                    // }
                },
                {
                    screen: "BSGD.SharePlaceScreen",
                    label: "Tài khoản",
                    title: "Tài khoản",
                    icon: sources[2],
                    navigatorStyle: {
                        navBarHidden: true
                    }
                    // navigatorButtons: {
                    //     leftButtons: [
                    //         {
                    //             icon: sources[2],
                    //             title: "Menu",
                    //             id: "sideDrawerToggle"
                    //         }
                    //     ]
                    // }
                }
            ],
            drawer:{
                left:{
                    screen: "BSGD.SideDrawer"
                }
            }
        });
    });
};

export default startTabs;


