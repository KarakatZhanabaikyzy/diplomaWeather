import {View, Text, Image,Alert} from "react-native";
import {s} from "./Recommendation.style"
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import welcomePic from "..//../assets/pics/girlWindy.png";
import {ButtonFavs} from "..//../components/ButtonFavs/ButtonFavs";
import mainPageExample from "..//../assets/mainPageExample.png";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { useNavigation } from "@react-navigation/native";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall";
import {useEffect, useState } from "react";
import { Favs } from "../Favs/Favs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export function RecommendationPage( { route } ){

    // Теперь вы можете использовать imageUrl как { uri: imageUrl }
    // Используйте mainPageExample как fallback, если imageUrl не определён
    // const imageSrc = imageUrl ? { uri: imageUrl } : mainPageExample;
    
    const { imageUrl } = route.params;
    const { imageID } = route.params;
   


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

    const nav = useNavigation();


     return(
        <View style={s.main_box}>
            <TopHeader>
                <View style={s.headerStyle}>
                <View style={s.img_box}>
                    <Image style={s.girlWindy} source={welcomePic}/>
                </View>
                <View>
                    <Txt style={s.txt_choice}>Bad weather not excuse </Txt>
                    <Txt style={s.txt_choice}>to not wear your best </Txt>
                    <Txt style={s.txt_choice}>look!</Txt>
                    <ButtonFavs
                     onPress={()=> nav.navigate("Favs", {})}>
                    <Txt style={s.txt_favs}>Favs</Txt>
                </ButtonFavs> 
                </View>
                </View> 
            </TopHeader>
            <View style={s.recommendation_box}>
                 <Txt style={{fontSize: 27}}>
                      My recommendation
                 </Txt>
                 <View>
                {/* <ButtonLike
                 onPress={()=> nav.navigate("StyleChoice", {})}/> */}
                 </View>
                 {/* <Image style={s.img_carousel} source={{ uri: imageUrl }}/> */}
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
        </View>
     );
};