import {s} from "./InputPlaceProfile.style";
import {Image, TextInput, View} from "react-native";
import edit from "..//../assets/edit.png"

export function InputPlaceProfile({children, style, placeholder}){
    return(
      <View style={s.root}>
          <TextInput 
            style={[s.input, style]} 
            placeholder={placeholder}>
               {/* <Image style={s.edit} source={edit}/> */}
            </TextInput>
      </View>
    );
};