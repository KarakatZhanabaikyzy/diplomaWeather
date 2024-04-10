import {View, Text, Image} from "react-native";
import { Txt } from "../../components/Txt/Txt"; 
import {s, StyledContainer, StyledLabel, StyledValue} from "./TempBoard.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import LinearGradient from 'react-native-linear-gradient';
import tempIcon from "..//../assets/tempBoard/tempIcon.png";
import humidityIcon from "..//../assets/tempBoard/humidityIcon.png";
import windIcon from "..//../assets/tempBoard/windIcon.png";
import Example from "..//../assets/example.png";

export function TempBoard({temperature, windspeed, interpretation}){
    return(
        <LinearGradient colors={['#E2F6FC', '#73CFE8']} style={s.container}>
        <View style={s.box1}>
            <Txt style={s.interpretation_txt}>{interpretation?.label}</Txt>
            <Image style={s.weatherOption} source={interpretation?.image}/>
        </View>
        <View style={s.box2}>
            <StyledContainer >
                 <Image style={s.image_charac} source={tempIcon}/>
                 <StyledValue>{temperature}°C</StyledValue>
           </StyledContainer>
           <StyledContainer >
                 <Image style={s.image_charac} source={humidityIcon}/>
                 <StyledValue>3 %</StyledValue>
           </StyledContainer>
           <StyledContainer >
                 <Image style={s.image_charac} source={windIcon}/>
                 <StyledValue>{windspeed} km/h</StyledValue>
            </StyledContainer>
        </View>
        </LinearGradient>
    );
};