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


    return(
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
                onChangeText={text => setPassword(text)}/>
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
                <ButtonGoogle />
            </View>

        </View>
        </ScrollView> 
    );
}