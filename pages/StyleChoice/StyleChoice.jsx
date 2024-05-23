import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import {s} from "./StyleChoice.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import { RecommendationPage } from '../CategoryPage/CategoryPage';
import rainGirl from "..//../assets/pics/rainGirl.png";
import {useEffect, useState } from "react";
import { ButtonSmall } from '../../components/ButtonSmall/ButtonSmall';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import mainPageExample from "..//../assets/mainPageExample.png";
import { CategoryPage } from '../CategoryPage/CategoryPage';




export function StyleChoice(){

  const nav = useNavigation();

  const [category, setCategory] = useState('Casual');
  const [selectedItem, setSelectedItem] = useState(null);
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState(mainPageExample); 
  const [imageId, setImageId] = useState('');
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      Alert.alert(
        "Authorization Required",
        "You need to be logged in to access this feature.",
        [
          {text: "Login", onPress: () => nav.navigate('LoginPage')},
          {text: "Sign Up", onPress: () => nav.navigate('SignupPage')}
        ]
      );
    }
  }



  // const [clothingStyle, setClothingStyle] = useState(category);

  useEffect(() => {
    // console.log("Updated imageURL:", imageURL);
    // console.log("Тип imageURL:", typeof imageURL);
  }, [imageURL]);  

  useEffect(() => {
    if (imageURL !== mainPageExample) { 
      console.log("newwwwwwww:", imageURL);
      setShouldNavigate(true);
    }
  }, [imageURL]); 
  
  useEffect(() => {
    if (shouldNavigate) {
      console.log("Navigating with imageURL:", imageURL);
      nav.navigate("CategoryPage", {
        imageUrl:  imageURL, 
        imageID: imageId,
        locationRefresh: location,
        categoryRefresh: category

      });
      setShouldNavigate(false);
    }
  }, [shouldNavigate,imageURL]);
  
  

  async function submitOutfitPreferences() {
    console.log("Location:", location);
    console.log("clothing_style:", category);
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem('access_token');
      console.log("1");
      const response = await axios.post('https://diplomawork-production.up.railway.app/main_outfit', {
        location: location , 
        clothing_style: category,  
        save_to_favorites: true  
      }, {
        headers: {
          'Authorization': `Bearer ${token}`  
        }
      });
      console.log("2");
      console.log(response.data);
      
      if (response.data.message === 'Image generated successfully' && response.data.image_url) {
        console.log("URL:", response.data.image_url);
        // setLocation('');  // Сбросить location после отправки //проблема again
        setImageURL(response.data.image_url);
        setImageId(response.data.image_id);

        // setShouldNavigate(true); 

        console.log("URL second:", response.data.image_url);
        setIsLoading(false); 
        // nav.navigate("RecommendationPage", { imageUrl: response.data.image_url }); 
        // nav.navigate("RecommendationPage", { imageUrl: imageURL }); 
        console.log("URL third:", response.data.image_url);
        console.log("Response from server:", response.data);

      } else {
        Alert.alert("Error", response.data.error || "Unknown error occurred");
        setIsLoading(false); 
        console.log("Response from server:", response.data);

      }
      console.log("3");
      console.log("Response from server:", response.data);
      setIsLoading(false); //*
      
    } catch (error) {
      console.error('Error submitting preferences:', error);
      Alert.alert("Error", "Failed to submit preferences");
      setIsLoading(false);
     

    }
    
  }



  const categoriesData = {
    Casual: [
      { id: '1', label: 'Work', image: require('..//../assets/categories/casuall1.png')},
      { id: '2', label: 'Meet-up', image: require('..//../assets/categories/casuall2.png') },
      { id: '3', label: 'Walk', image: require('..//../assets/categories/casuall3.png') },
      { id: '4', label: 'Picnic', image: require('..//../assets/categories/casuall4.png') },
      { id: '5', label: 'Coffee shop', image: require('..//../assets/categories/casuall5.png') },
      { id: '6', label: 'Movie theater', image: require('..//../assets/categories/casuall6.png') },
      
    ],
    Business: [
      { id: '7', label: 'Office', image: require('..//../assets/categories/businesss1.png') },
      { id: '8', label: 'Conference', image: require('..//../assets/categories/businesss2.png') },
      { id: '9', label: 'Meetings', image: require('..//../assets/categories/businesss3.png') },
      { id: '10', label: 'Job interview', image: require('..//../assets/categories/businesss4.png') },
      { id: '11', label: 'Business dinner', image: require('..//../assets/categories/businesss5.png') },
      { id: '12', label: 'Court appearance', image: require('..//../assets/categories/businesss6.png') },
    ],
    Elegant: [
      { id: '13', label: 'Ball', image: require('..//../assets/categories/elegantt1.png') },
      { id: '14', label: 'Wedding', image: require('..//../assets/categories/elegantt2.png') },
      { id: '15', label: 'Theater', image: require('..//../assets/categories/elegantt3.png') },
      { id: '16', label: 'Restaurant', image: require('..//../assets/categories/elegantt4.png') },
      { id: '17', label: 'Cultural event', image: require('..//../assets/categories/elegantt5.png') },
      { id: '18', label: 'Museum', image: require('..//../assets/categories/elegantt6.png') },
    ],
    Sporty: [
      { id: '19', label: 'Gym', image: require('..//../assets/categories/sportyy1.png') },
      { id: '20', label: 'Outdoor activitie', image: require('..//../assets/categories/sportyy2.png') },
      { id: '21', label: 'Sport event', image: require('..//../assets/categories/sportyy3.png') },
      { id: '22', label: 'Hangout', image: require('..//../assets/categories/sportyy4.png') },
      { id: '23', label: 'Travel', image: require('..//../assets/categories/sportyy5.png') },
      { id: '24', label: 'Home', image: require('..//../assets/categories/sportyy6.png') }
    ],
  };

 
  const handleCategoryPress = (category) => {
    setCategory(category);
  };


  const handleItemPress = (item) => {
    if (selectedItem && selectedItem.id === item.id) {
      setLocation('');  
      setSelectedItem(null);  
    } else {
      setLocation(item.label);  
      setSelectedItem(item); 
    }
  };
  


     return(
      <View style={{flex: 1}}>
          {isLoading && (
            <View style={s.loading}>
                <ActivityIndicator size="large" color="white" />
            </View>
          )}
            <TopHeader>
                <View style={s.headerStyle}>
                <View style={s.img_box}>
                    <Image style={s.rainGirl} source={rainGirl}/>
                </View>
                <View>
                    <Txt style={s.txt_choice}>Let's choose your</Txt>
                    <Txt style={s.txt_choice}>style of clothing,</Txt>
                    <Txt style={s.txt_choice}>in the future it will</Txt>
                    <Txt style={s.txt_choice}>help us</Txt>
                </View>
                </View>  
            </TopHeader>
            <Txt style={s.txt_style}>Choose where you go</Txt>
     <View style={{flex: 1}}>
      <View style={s.categoryContainer}>
        {Object.keys(categoriesData).map((cat, index) => (
          <TouchableOpacity 
            key={index}
            style={[s.basicCategory, category === cat && s.chosenCategory]} 
            onPress={() => handleCategoryPress(cat)}
            >
            <Text style={[s.categoryText, category === cat && s.activeCategoryText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={s.flatlistContainer}>
      <FlatList
      data={categoriesData[category]} 
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <View style={[s.itemContainer,selectedItem && selectedItem.id === item.id && s.selectedItem]}>
            <Image source={item.image} style={s.itemImage} />
            <Text style={s.itemLabel}>{item.label}</Text>
          </View>
        </TouchableOpacity>
      )} 
     
      />
      </View>
    </View>
    <View style={s.buttons_box}>
                    <ButtonSmall style={s.back_btn}
                     onPress={()=> nav.navigate("TabNav", {})}>
                        <Txt style={{color:"#22668D"}}>back</Txt>    
                    </ButtonSmall>
                    <ButtonSmall 
                        style={{backgroundColor:"#22668D"}}
                        onPress={submitOutfitPreferences}>
                        <Txt style={{color:"white"}}>next</Txt>
                    </ButtonSmall>
   </View>
            
    </View>

     );
};


  
  