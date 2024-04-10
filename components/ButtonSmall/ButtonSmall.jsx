import {s} from "./ButtonSmall.style";
import {Text, TouchableOpacity} from "react-native";

export function ButtonSmall({children, style, title, onPress}){
    return(
       <TouchableOpacity style={[s.button, style]} onPress={onPress}>
        {children}
       </TouchableOpacity>
    )
}