import {View, Text, Image,Alert, TouchableOpacity} from "react-native";
import {s} from "./RecommendationPage.style";
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

export function RecommendationPage( {route} ){

    // Теперь вы можете использовать imageUrl как { uri: imageUrl }
    // Используйте mainPageExample как fallback, если imageUrl не определён
    // const imageSrc = imageUrl ? { uri: imageUrl } : mainPageExample;

    async function checkUser() {
      const token = await AsyncStorage.getItem('access_token');
      if (!token) {
        console.log('No user token found, using default coordinates');
        return 'Default City';
      }
    };

    
    const imageUrl = route?.params?.imageUrl || "https://diplomawork-production.up.railway.app/static/out/txt2img_2311103220.png";
    const imageID = route?.params?.imageID || "663f6365ef0536edb90dedd8";

    const nav = useNavigation();
   


    async function addToFavorites() {
        try {
          const token = await AsyncStorage.getItem('access_token');
          const response = await axios.post('https://diplomawork-production.up.railway.app/add_to_favorites', {
            image_id: imageID
          }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
      
          if (response.data.message === 'Image added to favorites successfully') {
            Alert.alert("Success", "Image added to favorites!");
            console.log("Image ID:", imageID);
          } else {
            Alert.alert("Error", response.data.error || "Unknown error occurred");
          }
        } catch (error) {
          console.error('Error adding to favorites:', error);
          Alert.alert("Error", "Failed to add to favorites");
        }
        console.log("Image ID:", imageID);
      }


     return(
            <View style={s.recommendation_box}>
                 <Txt style={{fontSize: 27}}>
                      My recommendation
                 </Txt>
                 <View>
                 </View>
                 {
                    console.log("Тип imageUrl:", typeof imageUrl)
                 }
                 {
                    console.log("Значение imageUrl:", imageUrl)
                 }
                 {  
                    
                       typeof imageUrl === 'string' ? (
                       <Image style={s.img_carousel} source={{ uri: imageUrl }} />
                    ) : (
                       <Image style={s.img_carousel} source={mainPageExample} />
                    )
                }
                 <View style={s.buttons_box}>
                    <ButtonSmall style={s.back_btn}>
                        <Txt style={{color:"#22668D"}}>again</Txt>    
                    </ButtonSmall>
                    <ButtonSmall 
                        style={{backgroundColor:"#22668D"}}
                        onPress={addToFavorites}
                        >
                        <Txt style={{color:"white"}}>save look</Txt>
                    </ButtonSmall>
                 </View>
            </View>
       
     );
};