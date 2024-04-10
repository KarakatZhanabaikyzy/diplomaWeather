import {s} from "./ButtonBig.style";
import {Text, TouchableOpacity} from "react-native";

export function ButtonBig({children, style, title, onPress}){
    return(
       <TouchableOpacity style={[s.button, style]} onPress={onPress}>
        {children}
       </TouchableOpacity>
    )
}