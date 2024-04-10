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
import { useState } from "react";
import { Favs } from "../Favs/Favs";

export function RecommendationPage(){
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
                 <Image style={s.img_carousel} source={mainPageExample}/>
                 <View style={s.buttons_box}>
                    <ButtonSmall style={s.back_btn}>
                        <Txt style={{color:"#22668D"}}>again</Txt>    
                    </ButtonSmall>
                    <ButtonSmall style={{backgroundColor:"#22668D"}}>
                        <Txt style={{color:"white"}}>save look</Txt>
                    </ButtonSmall>
                 </View>
            </View>
        </View>
     );
};