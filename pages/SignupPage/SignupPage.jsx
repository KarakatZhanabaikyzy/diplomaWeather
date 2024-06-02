import {View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert} from "react-native";
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

    // const handleSignup = () => {
       
    //     if (!email.trim()) {
    //         console.error('Email is required');
    //         return;
    //     }
    //     if (!username.trim()) {
    //         console.error('Username is required');
    //         return;
    //     }
    //     if (!city.trim()) {
    //         console.error('City is required');
    //         return;
    //     }
    //     if (gender !== 'm' && gender !== 'f') {
    //         console.error('Gender must be either "m" or "f"');
    //         return;
    //     }
    //     if (!password) {
    //         console.error('Password is required');
    //         return;
    //     }

    //     register()
    // };


    // const register = async () => {
    //     console.log("trying to request ")
    //     const body = {
    //         "email": email.trim(),
    //         "username": username.trim(),
    //         "city": city.trim(),
    //         "gender": gender,
    //         "password": password,
    //     };
    //     console.log(email);
    //     console.log(username);

    //     const headers = {
           
    //         "Content-Type": "application/json",
    //     };

    //     try {
    //         const response = await axios.post(
    //             "https://diplomawork-production.up.railway.app/register",
    //             body,
    //             { headers }
    //         );
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log("err", error.response.data);
    //     }
    // };

const handleSignup = () => {
    if (!email.trim()) {
        console.error('Email is required');
        Alert.alert("Error", "Email is required"); 
        return;
    }
    if (!username.trim()) {
        console.error('Username is required');
        Alert.alert("Error", "Username is required");
        return;
    }
    if (!city.trim()) {
        console.error('City is required');
        Alert.alert("Error", "City is required");
        return;
    }
    if (gender !== 'm' && gender !== 'f') {
        console.error('Gender must be either "m" or "f"');
        Alert.alert("Error", "Gender must be either 'M' or 'W'");
        return;
    }
    if (!password) {
        console.error('Password is required');
        Alert.alert("Error", "Password is required");
        return;
    }

    register();
};

const register = async () => {
    console.log("Trying to request");
    const body = {
        "email": email.trim(),
        "username": username.trim(),
        "city": city.trim(),
        "gender": gender,
        "password": password,
    };

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
        Alert.alert("Success", "Confirmation email was sent. Check your email."); 
    } catch (error) {
        console.error("Error", error.response.data);
        Alert.alert("Registration Failed", error.response.data); 
    }
};


    
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option); 
        setGender(option);
    };


    GoogleSignin.configure({
        webClientId: '988664370161-svs8r2t1cj2kpec0680vpe1uggtfo2t0.apps.googleusercontent.com', 
    });
    
    
const handleGoogleSignIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const tokens = await GoogleSignin.getTokens();
        sendTokenToBackend(tokens.idToken);
    } catch (error) {
        console.error('Google sign-in error:', error);
    }
};

const sendTokenToBackend = async (idToken) => {
    try {
        const response = await axios.post('https://diplomawork-production.up.railway.app/auth/verify_token', {
            idToken: idToken
        });
        handleBackendResponse(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Failed to send token to backend:', error.response?.data || error.message);
    }
};

const handleBackendResponse = (data) => {
    if (data.token) {
        console.log('Authentication successful:', data);
    } else {
        console.error('Authentication failed:', data.message);
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
                <Txt style={{fontSize: 28}}>Hi, Register yourself</Txt>
            </View>
            <View style={s.input_box}>
                
            <View style={s.root}>
               <TextInput style={s.input_text} 
                placeholder="E-mail"
                placeholderTextColor="#858585"
                value={email}
                onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={s.root}>
                <TextInput style={s.input_text} 
                placeholder="Username"
                placeholderTextColor="#858585"
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
                             <Text style={s.label}>F</Text>
                          </TouchableOpacity>
                        </View>
                   </View>
                   <View style={s.root}>
                      <TextInput style={s.city} 
                      placeholder="City"
                      placeholderTextColor="#858585"
                      value={city}
                      onChangeText={text => setCity(text)}/>
                   </View>
                </View>
            <View style={s.root}>    
                <TextInput style={s.input_text} 
                placeholder="Password"
                placeholderTextColor="#858585"
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