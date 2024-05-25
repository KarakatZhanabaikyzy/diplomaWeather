import { StyleSheet } from "react-native";
import {View, Text} from "react-native";
import {Txt} from "..//Txt/Txt";

export const s = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 10,
        height: 150,
        
    },
    box1:{
        flexDirection:"row",
        alignItems:"center",
        flex: 0.6,
        paddingHorizontal: 20,
        justifyContent:"space-between",
        
    },
    interpretation_txt:{
        fontSize: 30,
        color:"#02466D",
    },
    box2:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"center",
       
        
    },
    image_charac:{
        width: 30,
        height:30
    },
    weatherOption:{
        width: 55,
        height:55,
        resizeMode:'contain'
    }
});


export function StyledContainer({children}){
    return <View style={{alignItems: "center", 
                 backgroundColor: "white",
                 width: 100,
                 height: 80,
                 borderRadius: 10,
                 justifyContent:"space-evenly"
                }}>
                {children}
            </View>
};

export function StyledLabel({children}){
    return <Txt style={{fontSize: 15}}>{children}</Txt>
};

export function StyledValue({children}){
    return <Txt 
            style={{
                fontSize: 20,
                color:"#02466D"
            }}>
                {children}
            </Txt>
};