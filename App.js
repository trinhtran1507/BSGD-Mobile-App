import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import configureStore from './src/store/configureStore';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import HomePage from './src/screens/Homepage/HomePage';
import startMainTabs from "./src/screens/MainTabs/startMainTabs";
import SearchScreen from "./src/screens/Search/Search";
import ListDoctor from "./src/screens/ListDoctor/ListDoctor";
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
Navigation.registerComponent("BSGD.FindPlaceScreen", 
  () => FindPlaceScreen,
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
  () => ListDoctor,
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