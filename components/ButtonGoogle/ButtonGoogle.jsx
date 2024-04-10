import {s} from "./ButtonGoogle.style";
import {Text, TouchableOpacity, Image} from "react-native";

export function ButtonGoogle({style, title, onPress}){
    return(
       <TouchableOpacity style={[s.button, style]} onPress={onPress}>
         <Image source={require('..//../assets/google.png')} style={s.imageStyle} />
         <Text style={s.txt}>Sign up with Google</Text>
       </TouchableOpacity>
    )
}