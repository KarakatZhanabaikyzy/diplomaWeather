import {View, Text, Image,Alert, TouchableOpacity, TextInput, Button, ScrollView} from "react-native";
import {s} from "./Chat.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import welcomePic from "..//../assets/pics/girlWindy.png";
import {ButtonFavs} from "../../components/ButtonFavs/ButtonFavs";
import mainPageExample from "..//../assets/mainPageExample.png";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { useNavigation } from "@react-navigation/native";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall";
import {useEffect, useState } from "react";
import { Favs } from "../Favs/Favs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import avatarUser from "..//../assets/user.png";
import avatarBot from "..//../assets/chat.png";

export function Chat(){

    const nav = useNavigation();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [typingAnimation, setTypingAnimation] = useState('');


    const sendMessage = async () => {
        setIsLoading(true); 
     try {
          const token = await AsyncStorage.getItem('access_token');
          if (!token) {
              console.error('JWT token not found');
              setIsLoading(false);
              return;
          }
  
          const response = await axios.post('https://diplomawork-production.up.railway.app/generate_advise', { 
               message 
          }, {
              headers: {
                  Authorization: `Bearer ${token}` 
              }
          });
          
          console.log("sent message: ", message);
          const receivedMessage = response.data.description;
          console.log("description message: ", response.data.description);
          setMessages(prevMessages => 
               [...prevMessages, { type: 'sent', text: message, avatar: avatarUser, name: 'You' }, 
               { type: 'received', text: receivedMessage, avatar: avatarBot, name: 'Weather Wardrobe' }]);
          setMessage('');
      } catch (error) {
          console.error('Error sending message:', error);
      }
        setIsLoading(false); 
 };

 useEffect(() => {
    let intervalId;

    if (isLoading) {
        intervalId = setInterval(() => {
            setTypingAnimation(prev => {
                if (prev.length < 3) {
                    return prev + '.';
                } else {
                    return '';
                }
            });
        }, 500); 
    } else {
        setTypingAnimation(''); 
    }

    return () => clearInterval(intervalId); 
}, [isLoading]);

   

     return(
          <View style={s.chat_box}>
            <View style={s.header_container}>
               <Text style={s.header_txt}>
                  WeatherWardrobe Chat
               </Text>
            </View>   
           <ScrollView style={{ flex: 1 }}>
                {messages.map((msg, index) => (
                    <View key={index} style={{ margin: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        {/* <Image source={msg.avatar} style={{ width: 40, height: 40, borderRadius: 25 }} /> */}
                        <Image 
                        source={msg.type === 'sent' ? avatarUser : avatarBot} 
                        style={{ width: 40, height: 40, borderRadius: 25 }} 
                    />
                        <View style={{ marginLeft: 10 , width: 280}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: msg.type === 'sent' ? 'black' : '#22668D'}}>{msg.name}</Text>
                            <Text style={{ color: msg.type === 'sent' ? 'black' : '#22668D' }}>{msg.text}</Text>
                        </View>
                    </View>
                ))}

                {isLoading && (
        <View style={{ margin: 10, padding: 10, flexDirection: 'row', alignItems: 'center',  zIndex: 100 }}>
            <Image source={avatarBot} style={{ width: 40, height: 40, borderRadius: 25 }} />
            <Text style={{ marginLeft: 10, color: '#22668D' }}>{`Weather Wardrobe is typing${typingAnimation}`}</Text>
        </View>
    )}
            </ScrollView>
          <View style={s.txt_box}>
              <TextInput
                   style={s.txt_input}
                   onChangeText={setMessage}
                   value={message}
                   placeholder="Message WeatherWardrobe"
              />
              <TouchableOpacity 
                   style={s.btn_send}
                   onPress={sendMessage}
               >
               <Text style={s.btn_txt}>↑</Text>
               </TouchableOpacity>
          </View>
      </View>
       
     );
};