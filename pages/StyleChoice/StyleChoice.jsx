import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {s} from "./StyleChoice.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import rainGirl from "..//../assets/pics/rainGirl.png";
import { useState } from "react";
import { ButtonSmall } from '../../components/ButtonSmall/ButtonSmall';
import { useNavigation } from "@react-navigation/native";

export function StyleChoice(){

  const nav = useNavigation();

  const [category, setCategory] = useState('Casual');
  const [selectedItem, setSelectedItem] = useState(null);

  const categoriesData = {
    Casual: [
      { id: '1', label: 'Item 1', image: require('..//../assets/categories/casual1.png')},
      { id: '2', label: 'Item 2', image: require('..//../assets/categories/casual2.png') },
    ],
    Business: [
      { id: '3', label: 'Item 3', image: require('..//../assets/categories/business1.png') },
      { id: '4', label: 'Item 4', image: require('..//../assets/categories/business2.png') },
    ],
    Elegant: [
      { id: '5', label: 'Item 5', image: require('..//../assets/categories/elegant1.png') },
      { id: '6', label: 'Item 6', image: require('..//../assets/categories/elegant2.png') },
    ],
    Sporty: [
      { id: '7', label: 'Item 7', image: require('..//../assets/categories/sporty1.png') },
      { id: '8', label: 'Item 8', image: require('..//../assets/categories/sporty2.png') },
    ],
  };

 
  const handleCategoryPress = (category) => {
    setCategory(category);
  };

  const handleItemPress = (id) => {
    setSelectedItem((prevSelectedItem) => {
      if (prevSelectedItem === id) {
        return null;
      } else {
        return id;
      }
    });
  };



     return(
        <View>
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
        <TouchableOpacity onPress={() => handleItemPress(item.id)}>
          <View style={[s.itemContainer, selectedItem === item.id && s.selectedItem]}>
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
                    <ButtonSmall style={{backgroundColor:"#22668D"}}>
                        <Txt style={{color:"white"}}>next</Txt>
                    </ButtonSmall>
   </View>
            
    </View>

     );
};


  
  