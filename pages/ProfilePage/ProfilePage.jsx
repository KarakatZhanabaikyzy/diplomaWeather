import {View, Text, Image, TextInput, Alert} from "react-native";
import {s} from "./ProfilePage.style";
import {Txt} from "..//../components/Txt/Txt";
import logo from "..//../assets/logo.jpg";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall";
import { ButtonBig } from "../../components/ButtonBig/ButtonBig";
import {useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useNavigation } from "@react-navigation/native";

export function ProfilePage(){
    // const nav = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [feedback, setFeedback] = useState('');


    useEffect(() => {
        async function fetchData() {
            const token = await AsyncStorage.getItem('access_token');
            try {
                const response = await axios.get('https://diplomawork-production.up.railway.app/user', {
                    headers: { 
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUsername(response.data.username);
                setEmail(response.data.email);
                setCity(response.data.city);
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        }
        fetchData();
    }, []);

    async function saveChanges() {
        try {
            const token = await AsyncStorage.getItem('access_token');
            const response = await axios.post('https://diplomawork-production.up.railway.app/update_profile', {
                username,
                email,
                city
            }, {
                headers: { 
                    'Authorization': `Bearer ${token}`
                }
            });
            Alert.alert("Success", "Your data successfully updated!");
            console.log("New username:",username);
            console.log("New city:",city);
            // nav.navigate("MainPage");

        } catch (error) {
            console.error('Error saving changes:', error);
            Alert.alert("Error", "Error saving changes");
        }
    }

    async function sendFeedback() {
        try {
            const token = await AsyncStorage.getItem('access_token');
            const response = await axios.post('https://diplomawork-production.up.railway.app/feedback', {
                feedback  
            }, {
                headers: { 
                    'Authorization': `Bearer ${token}`
                }
            });
            Alert.alert("Success", "Feedback sent successfully!");
            setFeedback('');
        } catch (error) {
            console.error('Error sending feedback:', error);
            Alert.alert("Error", "Failed to send feedback");
        }
    }


    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={20}
            enableOnAndroid={true}
        >
        <View style={s.main_box}>  
              <View style={s.innerView}>
                    <View style={s.circle}>
                    <Image style={s.ava} source={logo}/>
                    </View>
                    <View style={s.txt_info}>
                    <Txt>Hello, {username} !</Txt> 
                    {/* <Txt style={{fontSize:18, color:"#ABA7A7"}}>{email}</Txt> */}
                    </View>
                    <View style={s.inputContainer}>
                       <Txt style={{alignSelf:"flex-start"}}>Profile Information</Txt>
                       <View style={s.input_box}>
                       <View style={s.root}>
                          <TextInput
                              style={s.input} 
                              value={email}
                              onChangeText={setEmail}
                              placeholder="E-mail"
                           />
                        </View> 
                        <View style={s.root}>
                          <TextInput
                              style={s.input} 
                              value={username}
                              onChangeText={setUsername}
                              placeholder="Username"
                           />
                        </View>  
                        <View style={s.root}>
                          <TextInput
                              style={s.input} 
                              value={city}
                              onChangeText={setCity}
                              placeholder="City"
                           />
                        </View> 
                       </View>
                   </View>
                   <View style={s.inputFeedback}>
                       <Txt style={{alignSelf:"flex-start"}}>Feedback</Txt>
                       <View style={s.input_feedback}>
                       <View style={s.root}>
                          <TextInput
                              style={s.input}
                              value={feedback}
                              onChangeText={setFeedback}
                              placeholder="Give a feedback"
                           />
                        </View> 
                       </View>
                       <View style={s.buttons_box}>
                    <ButtonSmall style={{backgroundColor:"#22668D"}}
                        onPress={sendFeedback}>
                        <Txt style={{color:"white", fontSize: 18}}>Send feedback</Txt>    
                    </ButtonSmall>
                    <ButtonSmall 
                        style={{backgroundColor:"#22668D"}}
                        onPress={saveChanges}>
                        <Txt style={{color:"white", fontSize: 18}}>Save changes</Txt>
                    </ButtonSmall>
                </View>
                   </View>
                
                     <ButtonBig style={s.button_ext}>
                        <Text style={{color:"white", fontSize: 20}} >
                            Exit
                        </Text>
                     </ButtonBig>
              </View> 
        </View>
        </KeyboardAwareScrollView>
    );
};