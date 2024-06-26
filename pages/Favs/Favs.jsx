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


    const renderItem = ({ item, index }) => {
        const onLongPress = () => {
            Alert.alert(
                "Options",
                "Select an option to see description of image or to delete it.",
                [
                    // { text: "Cancel", style: "cancel" },
                    { text: "Description", onPress: () => Alert.alert("Description", item.description || "No description available.") },
                    { text: "Delete", onPress: () => deleteFavorite(index), style: 'destructive' }
                ],
                { cancelable: true }
            );
        };
    
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
                <TouchableOpacity onLongPress={onLongPress}>
                    <View style={s.imageContainer}>
                        <Image style={s.image} source={{ uri: item.image_url }} />
                    </View>
                </TouchableOpacity>
            );
        }
    };

    const deleteFavorite = async (index) => {
        try {
            const token = await AsyncStorage.getItem('access_token');
            const response = await axios.delete(`https://diplomawork-production.up.railway.app/favorites/${index}`, {
                headers: { 
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                setFavorites(favorites.filter((_, favIndex) => favIndex !== index));
                Alert.alert("Deleted", "The image has been successfully deleted.");
            }
        } catch (error) {
            console.error('Failed to delete favorite:', error);
            Alert.alert("Error", "Failed to delete the item.");
        }
    };

    return(
        <View style={{backgroundColor: "white", height: 800}}>
        <View style={s.flatlistContainer}>
        <FlatList
           data={favorites}
           renderItem={renderItem}
           keyExtractor={(item, index) => index.toString()}
           numColumns={2}
           ListHeaderComponent={() => (
        <View>
        </View>
        )}
        />
        </View>
        </View>

    );
};