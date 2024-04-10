import {View, Text, Image} from "react-native";
import {s} from "./ProfilePage.style";
import {Txt} from "..//../components/Txt/Txt";
import ava from "..//../assets/ava.png";
import logo from "..//../assets/logo.jpg";
import { InputPlaceProfile } from "../../components/InputPlaceProfile/InputPlaceProfile";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall";

export function ProfilePage(){
    return (
        <View style={s.main_box}>  
              <View style={s.innerView}>
                    <View style={s.circle}>
                    <Image style={s.ava} source={logo}/>
                    </View>
                    <View style={s.txt_info}>
                    <Txt>Zhanabaikyzy</Txt> 
                    <Txt style={{fontSize:18, color:"#ABA7A7"}}>03.karri@gmail.com</Txt>
                    </View>
                    <View style={s.inputContainer}>
                       <Txt style={{alignSelf:"flex-start"}}>Information</Txt>
                       <View style={s.input_box}>
                          <InputPlaceProfile
                              placeholder="Username"
                           />
                          <InputPlaceProfile
                              placeholder="City"
                            />
                          <InputPlaceProfile
                              placeholder="Gender"
                            />
                       </View>
                   </View>
                     <ButtonSmall style={s.button_ext}>
                        <Text style={{color:"white", fontSize: 18}} >
                            Exit
                        </Text>
                     </ButtonSmall>
              </View> 
        </View>
    );
};