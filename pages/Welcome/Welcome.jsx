import {View, Text, Image} from "react-native";
import {Txt} from "..//../components/Txt/Txt";
import welcomePic from "..//../assets/pics/girlWindy.png";
import {s} from "./Welcome.style";
import {ButtonSmall} from "../../components/ButtonSmall/ButtonSmall";
import {ButtonBig} from "../../components/ButtonBig/ButtonBig";
import { useNavigation } from "@react-navigation/native";

export function Welcome(){
    const nav = useNavigation();

    return(
        <View style={s.main_box}>
            <View style={s.img_box}>
                <Image style={s.img} source={welcomePic}/>
            </View>
            <View style={s.txt_box}>
              <Txt style={{fontSize: 27}}>Dress for the</Txt>
              <Txt style={{fontSize: 27}}>weather with us</Txt>
            </View>
            <View style={s.buttons_container}>
            <View style={s.buttons_box1}>
            <ButtonSmall 
                  style={{backgroundColor: "#FFCC70"}} 
                  onPress={()=> nav.navigate("LoginPage", {})}>
                    <Txt style={s.text}>Log in</Txt>
                </ButtonSmall>
            <ButtonSmall 
                  style={{backgroundColor: "#7E7E7E"}} 
                  onPress={()=> nav.navigate("SignupPage", {})}>
                    <Txt style={s.text}>Sign Up</Txt>
                </ButtonSmall>
            </View> 
            <View style={s.buttons_box2}>   
                <ButtonBig  style={{backgroundColor: "#22668D"}}
                 onPress={()=> nav.navigate("TabNav", {})}>
                    <Txt style={s.text}>Use as a guest</Txt>
                </ButtonBig>
                
            </View>
            </View>
        </View>
    );
}