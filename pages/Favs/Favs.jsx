import {View, Text, Image,Alert, FlatList, ScrollView, TouchableOpacity} from "react-native";
import {s} from "./Favs.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import welcomePic from "..//../assets/pics/girlWindy.png";
import addOutfit from ".//..//../assets/addOutfit.png";
import {ButtonFavs} from "..//../components/ButtonFavs/ButtonFavs";
import mainPageExample from "..//../assets/mainPageExample.png";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { useNavigation } from "@react-navigation/native";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall";
import {useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export function Favs(){

    const nav = useNavigation();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = await AsyncStorage.getItem('access_token');
                const response = await axios.get('https://diplomawork-production.up.railway.app/favorites', {
                    headers: { 
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log("Response Data:", response.data);
                console.log("favorites:", response.data.favorites);
                
                const defaultImage = {
                    source: addOutfit,
                    isDefault: true
                };

                const updatedFavorites = [defaultImage, ...response.data.favorites];
                
                setFavorites(updatedFavorites);
                
            } catch (error) {
                console.error('Failed to fetch favorites:', error);
            }
        };

        fetchFavorites();
    }, []);

    const handlePressDefaultImage = () => {
        console.log("Default image clicked!");
        nav.navigate("StyleChoice"); 
    };

    // const renderItem = ({ item }) => (
    //     <View style={s.imageContainer}>
    //         <Image style={s.image} source={{ uri: item.image_url }} />
    //         {/* <Text style={s.description}>{item.description}</Text> */}
    //     </View>
    // );

    const renderItem = ({ item }) => {
        if (item.isDefault) {
            return (
                <TouchableOpacity onPress={handlePressDefaultImage}>
                    <View style={s.imageContainer}>
                        <Image style={s.image} source={item.source} />
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <View style={s.imageContainer}>
                    <Image style={s.image} source={{ uri: item.image_url }} />
                </View>
            );
        }
    };

    return(
        <View style={s.flatlistContainer}>
        <FlatList
           data={favorites}
           renderItem={renderItem}
           keyExtractor={(item, index) => index.toString()}
           numColumns={2}
           ListHeaderComponent={() => (
        <View>
        <TopHeader>
            <View style={s.headerStyle}>
                <View style={s.img_box}>
                   <Image style={s.girlWindy} source={welcomePic}/>
                </View>
            <View>
            <Txt style={s.txt_choice}>Your liked looks</Txt>
            <Txt style={s.txt_choice}>to look awesome!</Txt>
            <ButtonFavs onPress={() => nav.navigate("TabNav", {})}>
              <Txt style={s.txt_favs}>Back</Txt>
            </ButtonFavs>
            </View>
            </View>
        </TopHeader>
        </View>
        )}
        />
        </View>

    );
};