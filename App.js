import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import BookApointmentScreen from './src/screens/BookApointment/BookApointment';
import configureStore from './src/store/configureStore';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import HomePage from './src/screens/Homepage/HomePage';
import startMainTabs from "./src/screens/MainTabs/startMainTabs";
import SearchScreen from "./src/screens/Search/Search";
import ListDoctorScreen from "./src/screens/ListDoctor/ListDoctor";
import BookApointmentInfoScreen from "./src/screens/BookApointmentInfo/BookApointmentInfo";
const store = configureStore();

// Register Screens
Navigation.registerComponent("BSGD.AuthScreen", 
  () => AuthScreen, 
  store, 
  Provider
);
Navigation.registerComponent("BSGD.SharePlaceScreen", 
  () => SharePlaceScreen,
  store, 
  Provider
);
Navigation.registerComponent("BSGD.BookApointmentScreen", 
  () => BookApointmentScreen,
  store, 
  Provider
);
Navigation.registerComponent("BSGD.PlaceDetailScreen", 
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent("BSGD.SideDrawer", 
  () => SideDrawer
);
Navigation.registerComponent("BSGD.HomePageScreen", 
  () => HomePage,
  store, 
  Provider
);
Navigation.registerComponent("BSGD.SearchScreen", 
  () => SearchScreen,
  store, 
  Provider
);
Navigation.registerComponent("BSGD.ListDoctorScreen", 
  () => ListDoctorScreen,
  store, 
  Provider
);
Navigation.registerComponent("BSGD.BookApointmentInfoScreen", 
  () => BookApointmentInfoScreen,
  store, 
  Provider
);
startMainTabs();
// Start a App
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: "BSGD.HomePageScreen",
//     navigatorStyle: {
//       navBarHidden: true
//     }
//     //title: "Login"
//   }
// });