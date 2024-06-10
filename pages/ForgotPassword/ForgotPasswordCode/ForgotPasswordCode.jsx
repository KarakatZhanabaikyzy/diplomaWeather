import {View, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput} from "react-native";
import { useState } from "react";
import {Txt} from "..//../../components/Txt/Txt";
import {s} from "./ForgotPasswordCode.style";
import {ButtonBig} from "..//../../components/ButtonBig/ButtonBig";
import { InputPlace } from "../../components/InputPlace/InputPlace";
import { ButtonGoogle } from "../../components/ButtonGoogle/ButtonGoogle";
import { useNavigation } from "@react-navigation/native";
import { SignupPage } from "../SignupPage/SignupPage";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export function ForgotPasswordCode(){
    const nav = useNavigation();

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const handleSend = () => {
        axios.post('https://diplomawork-production.up.railway.app/verify_code', { 
            email, 
            code: code })
            .then(response => {
                nav.navigate("ForgotPasswordNew", {});
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    Alert.alert('Invalid code or email', 'Please try again with correct email and code.');
                } else {
                    console.error('Error:', error);
                }
            });
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
                <Txt style={{fontSize: 28}}>Enter Code</Txt>
            </View>
            <View style={s.input_box}>
              <Txt style={{fontSize: 18, color:"#858585"}}>Write your e-mail again and code</Txt>
              <View style={s.root}>
                <TextInput 
                   style={s.input_text} 
                   placeholder="E-mail"
                   placeholderTextColor="#858585"
                   value={email}
                   onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={s.root}>
                 <TextInput
                   style={s.input_text} 
                   placeholder="Code"
                   placeholderTextColor="#858585"
                   value={code}
                   onChangeText={text => setCode(text)}
                   />
              </View>
            </View>
            <View style={s.redirection}>
                <ButtonBig style={{backgroundColor: "#FFCC70"}} 
                     onPress={handleSend}>
                    <Txt 
                       style={{color:"white"}}
                       >Send</Txt>
                       
                </ButtonBig>
                <Txt style={{fontSize: 18, color:"#858585"}}>Send code to reset your password</Txt>
            </View>
            
        </View>
     </ScrollView>   
     </KeyboardAwareScrollView>
    );
}