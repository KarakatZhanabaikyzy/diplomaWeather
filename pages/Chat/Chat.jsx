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
import avatarBot from "..//../assets/ava.png";

export function Chat(){

    const nav = useNavigation();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
     try {
          // Получение токена из AsyncStorage
          const token = await AsyncStorage.getItem('access_token');
  
          // Проверка наличия токена перед отправкой запроса
          if (!token) {
              console.error('JWT token not found');
              return;
          }
  
          const response = await axios.post('https://diplomawork-production.up.railway.app/generate_advise', { 
               message 
          }, {
              headers: {
                  Authorization: `Bearer ${token}` 
              }
          });
          
          const receivedMessage = response.data.description;
          console.log("description message: ", response.data.description);
          setMessages(prevMessages => 
               [...prevMessages, { type: 'sent', text: message, avatar: '..//../assets/user.png', name: 'You' }, 
               { type: 'received', text: receivedMessage, avatar: '..//../assets/ava.png', name: 'Weather Wardrobe' }]);
          setMessage('');
      } catch (error) {
          console.error('Error sending message:', error);
      }
 };
   

     return(
          <View style={s.recommendation_box}>
          <Text style={{ fontSize: 27 }}>My recommendation</Text>
          {/* <ScrollView style={{ flex: 1 }}>
              {messages.map((msg, index) => (
                  <View key={index} style={{ margin: 10, padding: 10, backgroundColor: msg.type === 'sent' ? 'lightblue' : 'lightgreen' }}>
                      <Text>{msg.text}</Text>
                  </View>
              ))}
          </ScrollView> */}
           <ScrollView style={{ flex: 1 }}>
                {messages.map((msg, index) => (
                    <View key={index} style={{ margin: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={msg.avatar} style={{ width: 40, height: 40, borderRadius: 25 }} />
                        <View style={{ marginLeft: 10 , width: 280}}>
                            <Text style={{ fontWeight: 'bold' }}>{msg.name}</Text>
                            <Text style={{ backgroundColor: msg.type === 'sent' ? 'lightblue' : 'lightgreen' }}>{msg.text}</Text>
                        </View>
                    </View>
                ))}
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
               <Text style={s.btn_txt}>Send</Text>
               </TouchableOpacity>
          </View>
      </View>
       
     );
};