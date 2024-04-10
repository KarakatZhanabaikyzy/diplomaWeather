import {View, Text, Image, TouchableOpacity, Alert, ScrollView} from "react-native";
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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
      try {
          const response = await axios.post("https://diplomawork-production.up.railway.app/login", {
              username: username,
              password: password,

            });

            console.log(response);
          if (response.status === 200 && response.data.access_token) {
              const token = response.data.access_token;
              console.log("Successful login:", token);
              await AsyncStorage.setItem('userToken', token); 
              Alert.alert("Success", "You have successfully logged in!");
              nav.navigate("MainPage");
          } else {
            Alert.alert("Error", errorMessage);
          }
      } catch (error) {
          console.error("Error logging in:", error);
          Alert.alert("Error", "Something went wrong. Try again.");
      }
  };

    return(
      <ScrollView contentContainerStyle={{ flexGrow: 3}}>  
        <View style={s.main_box}>
            <View style={s.hi}>
                <Txt style={{fontSize: 30}}>Hi, Welcome back</Txt>
            </View>
            <View style={s.input_box}>
                <InputPlace 
                   placeholder="Username"
                   value={username}
                   onChangeText={text => setUsername(text)}
                />
                 <InputPlace 
                   placeholder="Password"
                   value={password}
                   onChangeText={text => setPassword(text)}/>
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