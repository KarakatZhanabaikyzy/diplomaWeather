import {View, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput} from "react-native";
import { useState } from "react";
import {Txt} from "..//../../components/Txt/Txt";
import {s} from "./ForgotPasswordEmail.style";
import {ButtonBig} from "..//../../components/ButtonBig/ButtonBig";
import { InputPlace } from "../../components/InputPlace/InputPlace";
import { useNavigation } from "@react-navigation/native";
import { SignupPage } from "../SignupPage/SignupPage";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export function ForgotPasswordEmail(){
    const nav = useNavigation();

    const [email, setEmail] = useState("");

    const handleContinue = () => {
        axios.post('https://diplomawork-production.up.railway.app/forgot_password', { 
            email 
        })
            .then(response => {
                nav.navigate("ForgotPasswordCode", {});
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    Alert.alert('Email not found', 'Please try again with a different email.');
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
                <Txt style={{fontSize: 28}}>Password Restore</Txt>
            </View>
            <View style={s.input_box}>
              <Txt style={{fontSize: 18, color: "#858585"}}>Enter e-mail address</Txt>
              <View style={s.root}>
                <TextInput 
                   style={s.input_text} 
                   placeholder="E-mail"
                   placeholderTextColor="#858585"
                   value={email}
                   onChangeText={text => setEmail(text)}
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
                <Txt style={{fontSize: 18, color:"#858585"}}>You will get code on this e-mail</Txt>
            </View>
            
        </View>
     </ScrollView>   
     </KeyboardAwareScrollView>
    );
}