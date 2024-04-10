import {View, Text, SafeAreaView} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {s} from "./App.style";
import {Welcome} from "./pages/Welcome/Welcome";
import {NavigationContainer} from "@react-navigation/native";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {TabNav} from "./pages/TabNav/TabNav";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleChoice } from "./pages/StyleChoice/StyleChoice";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import { Favs } from "./pages/Favs/Favs";


const Stack = createNativeStackNavigator();


const navTheme={
  colors:{
    background: "transparent",
  }
}


export default function App(){
  

   return(
      <NavigationContainer theme={navTheme}>
        <SafeAreaProvider>
              <SafeAreaView style={s.container}>
               <Stack.Navigator 
                  screenOptions={{headerShown:false, animations: "fade"}} 
                  initialRouteName="Welcome"
                >
                  <Stack.Screen name="Welcome" component={Welcome}/>
                  <Stack.Screen name="LoginPage" component={LoginPage}/> 
                  <Stack.Screen name="SignupPage" component={SignupPage}/> 
                  <Stack.Screen name="MainPage" component={MainPage}/>
                  <Stack.Screen name="TabNav" component={TabNav}/> 
                  <Stack.Screen name="StyleChoice" component={StyleChoice}/> 
                  <Stack.Screen name="ProfilePage" component={ProfilePage}/> 
                  <Stack.Screen name="Favs" component={Favs}/> 
               </Stack.Navigator> 
             </SafeAreaView> 
        </SafeAreaProvider>  
      </NavigationContainer>
    ); 
};