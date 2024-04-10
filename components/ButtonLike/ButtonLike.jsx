import {s} from "./ButtonLike.style";
import {Text, TouchableOpacity} from "react-native";
import Svg, { Path } from 'react-native-svg';
import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';

export function ButtonLike({children, style, title, onPress}){
    const [isPressed, setIsPressed] = useState(false); 

    const handlePress = () => {
        setIsPressed(!isPressed);
        onPress(); 
      };
    

    return(
        <TouchableOpacity style={[s.button, style]} onPress={handlePress}>
        {children}
        <SvgXml  
      xml={`
      <svg width="27" height="27" viewBox="0 0 70 70">
          <path fill="${isPressed ? 'white' : '#FC7575'}" d="M19.4444 15.5556C19.4444 11.43 21.0833 7.47335 24.0006 4.55612C26.9178 1.63888 30.8744 0 35 0C39.1256 0 43.0822 1.63888 45.9994 4.55612C48.9167 7.47335 50.5556 11.43 50.5556 15.5556C50.5556 19.6811 48.9167 23.6378 45.9994 26.555C43.0822 29.4722 39.1256 31.1111 35 31.1111C30.8744 31.1111 26.9178 29.4722 24.0006 26.555C21.0833 23.6378 19.4444 19.6811 19.4444 15.5556ZM19.4444 38.8889C14.2875 38.8889 9.34169 40.9375 5.69515 44.584C2.04861 48.2306 0 53.1763 0 58.3333C0 61.4275 1.22916 64.395 3.41709 66.5829C5.60501 68.7708 8.57247 70 11.6667 70H58.3333C61.4275 70 64.395 68.7708 66.5829 66.5829C68.7708 64.395 70 61.4275 70 58.3333C70 53.1763 67.9514 48.2306 64.3049 44.584C60.6583 40.9375 55.7125 38.8889 50.5556 38.8889H19.4444Z"/>
        </svg>
      `}
       />
        </TouchableOpacity>
    )
}