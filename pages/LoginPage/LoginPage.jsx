import {View, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput} from "react-native";
import { useState } from "react";
import {Txt} from "..//../components/Txt/Txt";
import {s} from "./LoginPage.style";
import {ButtonBig} from "../../components/ButtonBig/ButtonBig";
import { InputPlace } from "../../components/InputPlace/InputPlace";
import { ButtonGoogle } from "../../components/ButtonGoogle/ButtonGoogle";
import { useNavigation } from "@react-navigation/native";
import { SignupPage } from "../SignupPage/SignupPage";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function LoginPage(){
    const nav = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const saveTokenToStorage = async (token) => {
    try {
      await AsyncStorage.setItem('access_token', token);
      console.log("token is saved!!");

      const savedToken = await AsyncStorage.getItem('access_token');
      console.log('Retrieved token from storage:', savedToken);

    return savedToken === token;  

    } catch (error) {
      console.error('Error saving token to AsyncStorage:', error);
      return false;  
    }
  };


  const handleSuccessfulLogin = async (token) => {
    const isTokenSaved = await saveTokenToStorage(token);
    if (isTokenSaved) {
      console.log('Token is successfully saved in AsyncStorage.');
      nav.navigate('TabNav');
    } else {
      console.log('Failed to save the token in AsyncStorage.');
    }
  };
  

  const performLoginRequest = async (token) => {
    handleSuccessfulLogin(token);
  };


  const handleLogin = async () => {
    try {
        const response = await axios.post("https://diplomawork-production.up.railway.app/login", {
            email: email,
            password: password,
        });

        const data = response.data;
        const token = response.data.access_token;
        console.log("Token:", token);


        if (response.status === 200) {
            console.log("Successfully logged in to the system:", data);
            performLoginRequest(token);
            // Alert.alert("Success", "You have successfully logged in!");
        } else {
            Alert.alert("Error", data.msg || "Something went wrong");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        Alert.alert("Error", error.response?.data?.msg || "Something went wrong. Try again.");
    }
     
};



    return(
      <ScrollView contentContainerStyle={{ flexGrow: 3}}>  
        <View style={s.main_box}>
            <View style={s.hi}>
                <Txt style={{fontSize: 30}}>Hi, Welcome back</Txt>
            </View>
            <View style={s.input_box}>
              <View style={s.root}>
                <TextInput 
                   style={s.input_text} 
                   placeholder="E-mail"
                   value={email}
                   onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={s.root}>
                 <TextInput
                   style={s.input_text} 
                   placeholder="Password"
                   value={password}
                   onChangeText={text => setPassword(text)}/>
              </View>
            </View>
            <View style={s.redirection}>
                <TouchableOpacity>
                  <View style={s.forgot}>
                   <Txt style={{color:"#02466D"}
                    }>Forgot password?</Txt>
                  </View>  
                </TouchableOpacity>
                <ButtonBig style={{backgroundColor: "#FFCC70"}} 
                       onPress={handleLogin}>
                    <Txt 
                       style={{color:"white"}}
                       >Login</Txt>
                </ButtonBig>
                <View style={s.signup}>
                   <Txt>Dont have an account? </Txt>
                   <TouchableOpacity
                       onPress={()=> nav.navigate("SignupPage", {})}>
                    <Txt 
                       style={{color:"#02466D"}}
                       >Sign Up</Txt>
                   </TouchableOpacity>
                </View>
            </View>
            <View style={s.google}>
                <Txt style={{color:"#B0B0B0"}}>Other method</Txt>
                <ButtonGoogle />
            </View>
            
            
        </View>
     </ScrollView>   
    );
}