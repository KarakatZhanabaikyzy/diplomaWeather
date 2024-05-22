import {View, Text, Image,Alert, TouchableOpacity} from "react-native";
import {s} from "./CategoryPage.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import welcomePic from "..//../assets/pics/girlWindy.png";
import {ButtonFavs} from "../../components/ButtonFavs/ButtonFavs";
import mainPageExample from "..//../assets/mainPageExample.png";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { useNavigation } from "@react-navigation/native";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall";
import { RecommendationPage } from "../RecommendationPage/RecommendationPage";
import { Chat } from "../Chat/Chat";
import {useEffect, useState } from "react";
import { Favs } from "../Favs/Favs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export function CategoryPage({ route }){

  
  async function checkUser() {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      console.log('No user token found, using default coordinates');
      return 'Default City';
    }
  };

  // console.log("category props: ", route.params);
  // console.log("category route: ", route);
  const { imageUrl, imageID } = route.params || {
    imageUrl: "https://diplomawork-production.up.railway.app/static/out/txt2img_2311103220.png",
    imageID: "663f6365ef0536edb90dedd8"
  };

 

  const nav = useNavigation();
  const [activeCategory, setActiveCategory] = useState('Outfit');
   

    const categories = [
     
      { label: 'Favorites', component: Favs },
      { label: 'Outfit', component: RecommendationPage },
      { label: 'Assistant', component: Chat },
    ];

    const handleCategoryPress = (category) => {
      setActiveCategory(category.label);
    };

    const ActiveComponent = categories.find(c => c.label === activeCategory)?.component || RecommendationPage;
  

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
                </View>
                </View> 
            </TopHeader>
             <View style={s.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={index}
            style={[s.basicCategory, activeCategory === category.label && s.chosenCategory]}
            onPress={() => handleCategoryPress(category)}>
            <Text style={[s.categoryText, activeCategory === category.label && s.activeCategoryText]}>
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {ActiveComponent && <ActiveComponent route={route} />}
        </View>
     );
};