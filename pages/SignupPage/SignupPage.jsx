import {View, Text, Image, TouchableOpacity, TextInput, ScrollView} from "react-native";
import { useState } from "react";
import {Txt} from "..//../components/Txt/Txt";
import {s} from "./SignupPage.style";
import {ButtonBig} from "../../components/ButtonBig/ButtonBig";
import { InputPlace } from "../../components/InputPlace/InputPlace";
import { ButtonGoogle } from "../../components/ButtonGoogle/ButtonGoogle";
import { useNavigation } from "@react-navigation/native";
import {LoginPage} from "..//./LoginPage/LoginPage";
import axios from "axios";
import {KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



export function SignupPage(){
    const nav = useNavigation();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
       
        if (!email.trim()) {
            console.error('Email is required');
            return;
        }
        if (!username.trim()) {
            console.error('Username is required');
            return;
        }
        if (!city.trim()) {
            console.error('City is required');
            return;
        }
        if (gender !== 'm' && gender !== 'f') {
            console.error('Gender must be either "m" or "f"');
            return;
        }
        if (!password) {
            console.error('Password is required');
            return;
        }

        register()
    };


    const register = async () => {
        console.log("trying to request ")
        const body = {
            "email": email.trim(),
            "username": username.trim(),
            "city": city.trim(),
            "gender": gender,
            "password": password,
        };
        console.log(email);
        console.log(username);

        const headers = {
           
            "Content-Type": "application/json",
        };

        try {
            const response = await axios.post(
                "https://diplomawork-production.up.railway.app/register",
                body,
                { headers }
            );
            console.log(response.data);
        } catch (error) {
            console.log("err", error.response.data);
        }
    };

    
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option); 
        setGender(option);
    };
    
    // GoogleSignin.configure({
    //     webClientId: '988664370161-8a0nj4mpjuvta3frtfvqbit57gaa8pqn.apps.googleusercontent.com', // ID клиента, полученного из Google Cloud Console
    // });

    // const handleGoogleSignIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const userInfo = await GoogleSignin.signIn();
    //       // Отправляйте userInfo в ваш бэкенд для обработки и создания токена
    //       console.log(userInfo);
    //     } catch (error) {
    //       console.error(error);
    //     }
    // };

    GoogleSignin.configure({
        webClientId: '988664370161-svs8r2t1cj2kpec0680vpe1uggtfo2t0.apps.googleusercontent.com', // Этот ID клиента вы получите в Google Cloud Console.
    });
    
    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            sendToBackend(userInfo);
            console.log(userInfo);
        } catch (error) {
            console.error(error);
        }
    };

    const sendToBackend = async (userInfo) => {
        const idToken = await GoogleSignin.getTokens();
        try {
            const response = await axios.post('https://diplomawork-production.up.railway.app/auth/google', {
                idToken: idToken.idToken
            });
            console.log('User is authenticated', response.data);
        } catch (error) {
            console.error('Failed to authenticate', error.response);
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
                <Txt style={{fontSize: 30}}>Hi, Register yourself</Txt>
            </View>
            <View style={s.input_box}>
                
            <View style={s.root}>
               <TextInput style={s.input_text} 
                placeholder="E-mail"
                value={email}
                onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={s.root}>
                <TextInput style={s.input_text} 
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                />
            </View>
                <View style={s.genderCity}>
                   <View style={s.radiobutton_box}>
                      <Txt>Gender:</Txt>
                        <View style={s.radiobutton}>
                         <TouchableOpacity
                           value={gender}
                           style={[s.option, selectedOption === 'm' && s.selectedOption]}
                           onPress={() => handleOptionSelect('m')}
                         >
                             <Text style={s.label}>M</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                           value={gender}
                           style={[s.option, selectedOption === 'f' && s.selectedOption]}
                           onPress={() => handleOptionSelect('f')}
                         >
                             <Text style={s.label}>W</Text>
                          </TouchableOpacity>
                        </View>
                   </View>
                   <View style={s.root}>
                      <TextInput style={s.city} 
                      placeholder="City"
                      value={city}
                      onChangeText={text => setCity(text)}/>
                   </View>
                </View>
            <View style={s.root}>    
                <TextInput style={s.input_text} 
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true} />
            </View>    
            </View>
            <View style={s.redirection}>
                <ButtonBig style={{backgroundColor: "#FFCC70"}} 
                      onPress={handleSignup}>
                    <Txt 
                       style={{color:"white"}}
                       >Sign Up</Txt>
                </ButtonBig>
                <View style={s.signup}>
                   <Txt>Already have an account?</Txt>
                   <TouchableOpacity
                       onPress={()=> nav.navigate("LoginPage", {})}>
                    <Txt 
                       style={{color:"#02466D"}}
                       >Sign In</Txt>
                   </TouchableOpacity>
                </View>
            </View>
            <View style={s.google}>
                <Txt style={{color:"#B0B0B0"}}>Other method</Txt>
                <ButtonGoogle 
                   onPress={handleGoogleSignIn}
                />
            </View>

        </View>
        </ScrollView> 
        </KeyboardAwareScrollView>
    );
}