import {View, Text, Image,Alert} from "react-native";
import {s} from "./Favs.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { Txt } from "../../components/Txt/Txt";
import welcomePic from "..//../assets/pics/girlWindy.png";
import {ButtonFavs} from "..//../components/ButtonFavs/ButtonFavs";
import mainPageExample from "..//../assets/mainPageExample.png";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { useNavigation } from "@react-navigation/native";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall";
import { useState } from "react";

export function Favs(){
    const nav = useNavigation();

     return(
        <View style={s.main_box}>
            <TopHeader>
                <View style={s.headerStyle}>
                <View style={s.img_box}>
                    <Image style={s.girlWindy} source={welcomePic}/>
                </View>
                <View>
                    <Txt style={s.txt_choice}>Your liked looks </Txt>
                    <Txt style={s.txt_choice}>to look awsome!</Txt>
                    <ButtonFavs
                     onPress={()=> nav.navigate("TabNav", {})}>
                    <Txt style={s.txt_favs}>Back</Txt>
                </ButtonFavs> 
                </View>
                </View> 
            </TopHeader>
        </View>
     );
};