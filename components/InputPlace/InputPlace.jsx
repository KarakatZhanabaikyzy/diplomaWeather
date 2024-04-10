import {s} from "./InputPlace.style";
import {TextInput, View} from "react-native";

export function InputPlace({children, style, placeholder}){
    return(
      <View style={s.root}>
          <TextInput style={[s.input, style]} placeholder={placeholder}/>
      </View>
    );
};