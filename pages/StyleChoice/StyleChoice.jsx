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

  const [category, setCategory] = useState('Sporty');
  const [selectedItem, setSelectedItem] = useState(null);
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState(mainPageExample); 
  const [imageId, setImageId] = useState('');
  const [shouldNavigate, setShouldNavigate] = useState(false);



  // const [clothingStyle, setClothingStyle] = useState(category);

  useEffect(() => {
    console.log("Updated imageURL:", imageURL);
    console.log("Тип imageURL:", typeof imageURL);
    // Здесь можно выполнять другие действия, зависящие от обновления imageURL
  }, [imageURL]);  

  useEffect(() => {
    if (imageURL !== mainPageExample) { // Проверьте, что imageURL действительно изменился
      console.log("newwwwwwww:", imageURL);
      setShouldNavigate(true);
    }
  }, [imageURL]); // Эффект срабатывает при изменении imageURL
  
  useEffect(() => {
    if (shouldNavigate) {
      console.log("Navigating with imageURL:", imageURL);
      nav.navigate("CategoryPage", {imageUrl:  imageURL, imageID: imageId});
      setShouldNavigate(false); // Сброс после навигации
    }
  }, [shouldNavigate,imageURL]); // Эффект срабатывает при изменении shouldNavigate
  
  

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
        setLocation('');  // Сбросить location после успешной отправки //проблема again
        setImageURL(response.data.image_url);
        setImageId(response.data.image_id);

        // setShouldNavigate(true); // Подготовка к навигации

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

  // useEffect(() => {
  //   if (shouldNavigate && imageURL) {
  //     console.log("Navigating with imageURL:", imageURL);
  //     nav.navigate("RecommendationPage", { imageUrl: imageURL });
  //     setShouldNavigate(false); // Сброс после навигации
  //   }
  // }, [shouldNavigate, imageURL]);

 
  


  const categoriesData = {
    Casual: [
      { id: '1', label: 'to cinema', image: require('..//../assets/categories/casual1.png')},
      { id: '2', label: 'to picnic', image: require('..//../assets/categories/casual2.png') },
      
    ],
    Business: [
      { id: '3', label: 'to work', image: require('..//../assets/categories/business1.png') },
      { id: '4', label: 'Item 4', image: require('..//../assets/categories/business2.png') },
    ],
    Elegant: [
      { id: '5', label: 'Item 5', image: require('..//../assets/categories/elegant1.png') },
      { id: '6', label: 'Item 6', image: require('..//../assets/categories/elegant2.png') },
    ],
    Sporty: [
      { id: '7', label: 'to airport', image: require('..//../assets/categories/sporty1.png') },
      { id: '8', label: 'Item 8', image: require('..//../assets/categories/sporty2.png') },
    ],
  };

 
  const handleCategoryPress = (category) => {
    setCategory(category);
  };

  // const handleItemPress = (id) => {
  //   setSelectedItem((prevSelectedItem) => {
  //     if (prevSelectedItem === id) {
  //       setLocation(item.label);
  //       // return null;
  //       console.log("LOCATION:", location)
  //     } else {
  //       return id;
  //     }
  //   });
  // };

  const handleItemPress = (item) => {
    if (selectedItem && selectedItem.id === item.id) {
      setLocation('');  // Очищаем location, если пользователь кликнул по уже выбранному элементу повторно
      setSelectedItem(null);  // Снимаем выбор элемента
    } else {
      setLocation(item.label);  
      setSelectedItem(item); 
    }
  };
  

  
  // const handleItemPress = (item) => {
  //   setSelectedItem((prevSelectedItem) => {
  //     if (prevSelectedItem === item) {
  //       setLocation(item.label);
  //       // return null;
  //       console.log("LOCATION:", location)
  //     } else {
  //       console.log("pizdes")
  //     }
  //   });
  // };


  // const handleItemPress = (item) => {
  //   setLocation(item.label);  // Сохраняем только label выбранного элемента
  // };
  



     return(
        <View>
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
    <View>
      <View style={s.categoryContainer}>
        {Object.keys(categoriesData).map((cat, index) => (
          <TouchableOpacity key={index} onPress={() => handleCategoryPress(cat)}>
            <Text style={[s.categoryText, category === cat && s.activeCategoryText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
      data={categoriesData[category]} 
      keyExtractor={(item) => item.id}
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


  
  