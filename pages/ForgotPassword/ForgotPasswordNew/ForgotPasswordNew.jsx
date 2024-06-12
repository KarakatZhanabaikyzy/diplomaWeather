import {View, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput} from "react-native";
import { useState } from "react";
import {Txt} from "..//../../components/Txt/Txt";
import {s} from "./ForgotPasswordNew.style";
import {ButtonBig} from "..//../../components/ButtonBig/ButtonBig";
import { InputPlace } from "../../components/InputPlace/InputPlace";
import { ButtonGoogle } from "../../components/ButtonGoogle/ButtonGoogle";
import { useNavigation } from "@react-navigation/native";
import { SignupPage } from "../SignupPage/SignupPage";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export function ForgotPasswordNew(){
    const nav = useNavigation();

    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleContinue = async () => {
        try {
            const response = await axios.post('https://diplomawork-production.up.railway.app/reset_password', { 
                // email, 
                password: password, 
                confirm_password: confirmPassword 
            });
            nav.navigate("LoginPage", {});
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred while resetting the password. Please try again later.');
        }
    };
    


    return(
      <KeyboardAwareScrollView
            style={{ flex: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={20}
            enableOnAndroid={true}
        >
      <ScrollView contentContainerStyle={{ flexGrow: 3}}>  
        <View style={s.main_box}>
            <View style={s.hi}>
                <Txt style={{fontSize: 28}}>Create New Password</Txt>
            </View>
            <View style={s.input_box}>
              <Txt style={{fontSize: 18, color:"#858585"}}>Enter a new password and confirm it</Txt>
             
              <View style={s.root}>
                <TextInput 
                   style={s.input_text} 
                   placeholder="Enter a new password"
                   placeholderTextColor="#858585"
                   value={password}
                   onChangeText={text => setPassword(text)}
                   secureTextEntry={true}
                />
              </View>
              <View style={s.root}>
                 <TextInput
                   style={s.input_text} 
                   placeholder="Confirm new password"
                   placeholderTextColor="#858585"
                   value={confirmPassword}
                   onChangeText={text => setConfirmPassword(text)}
                   secureTextEntry={true}
                   />
              </View>
            </View>
            <View style={s.redirection}>
                <ButtonBig style={{backgroundColor: "#FFCC70"}} 
                     onPress={handleContinue}>
                    <Txt 
                       style={{color:"white"}}
                       >Continue</Txt>
                       
                </ButtonBig>
                <Txt style={{fontSize: 18, color:"#858585"}}>Redirect to Login Page</Txt>
            </View>
            
        </View>
     </ScrollView>   
     </KeyboardAwareScrollView>
    );
}