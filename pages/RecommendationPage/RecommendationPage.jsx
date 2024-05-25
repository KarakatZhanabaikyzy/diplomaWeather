import {View, Text, Image,Alert, TouchableOpacity} from "react-native";
import { ActivityIndicator } from 'react-native';
import {s} from "./RecommendationPage.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import welcomePic from "..//../assets/pics/girlWindy.png";
import {ButtonFavs} from "../../components/ButtonFavs/ButtonFavs";
import mainPageExample from "..//../assets/mainPageExample.png";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { useNavigation, useIsFocused  } from "@react-navigation/native";
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

  

    // const [imageUrl, setImageUrl] = useState( route?.params?.imageUrl || "https://diplomawork-production.up.railway.app/static/out/txt2img_2311103220.png");
    // const [imageID, setImageID] = useState(route?.params?.imageID || "663f6365ef0536edb90dedd8");

    const locationRefresh =  route?.params?.locationRefresh || "Casual";
    const categoryRefresh =  route?.params?.locationRefresh || "Meet-up";

    const nav = useNavigation();
    const isFocused = useIsFocused(); // Hook to check if the screen is focused
  
    const [imageUrl, setImageUrl] = useState('');
    const [imageID, setImageID] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { imageUrl: routeImageUrl, imageID: routeImageID } = route.params || {};

    // Listen for changes in focus and route parameters
    useEffect(() => {
      if (isFocused && routeImageUrl && routeImageUrl !== imageUrl) {
        setImageUrl(routeImageUrl);
        setImageID(routeImageID);
      }
    }, [isFocused, routeImageUrl, routeImageID]);


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

      async function refreshImage() {
        setIsLoading(true); 
        try {
            const token = await AsyncStorage.getItem('access_token');
            const response = await axios.post('https://diplomawork-production.up.railway.app/main_outfit', {
                location: locationRefresh,  
                clothing_style: categoryRefresh,  
                save_to_favorites: true
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (response.data.message === 'Image generated successfully' && response.data.image_url) {
              console.log("refreshed response: ", response.data.image_url);
              console.log("LocationRefresh: ", locationRefresh);
              console.log("CategoryRefresh: ",categoryRefresh )
;                setImageUrl(response.data.image_url);
                setImageID(response.data.image_id);
            } else {
                Alert.alert("Error", response.data.error || "Unknown error occurred");
            }
        } catch (error) {
            console.error('Error on refreshing image:', error);
            Alert.alert("Error", "Failed to refresh image");
        }
        setIsLoading(false);
    }
    


     return(
      <View style={{backgroundColor: "white", height: 800}}>
      <View style={{flex: 1, backgroundColor:"white"}}>
          {isLoading && (
            <View style={s.loading}>
                <ActivityIndicator size="large" color="white" />
            </View>
          )}
            <View style={s.recommendation_box}>
                 <Txt style={{fontSize: 20}}>
                      My recommendation
                 </Txt>
                 <View>
                 </View>
                 <Image style={s.img_carousel} source={{ uri: imageUrl || 'https://diplomawork-production.up.railway.app/static/out/txt2img_2311103220.png' }} />
                 <View style={s.buttons_box}>
                    <ButtonSmall 
                        style={s.back_btn}
                        onPress={refreshImage}
                        >
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
       </View>
     );
};