import {View, Text} from "react-native";
import { Txt } from "../../components/Txt/Txt"; 
import {s} from "./TopHeader.style";

export function TopHeader({children, style, title, onPress}){
    return(
        <View style={[s.header, style]} onPress={onPress}>
            {children}
        </View>
    );
};