import {s} from "./ButtonFavs.style";
import {Text, TouchableOpacity} from "react-native";

export function ButtonFavs({children, style, title, onPress}){
    return(
       <TouchableOpacity style={[s.button, style]} onPress={onPress}>
        {children}
       </TouchableOpacity>
    )
}