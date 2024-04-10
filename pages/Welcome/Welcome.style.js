import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
        paddingBottom: 100,
        paddingTop: 55,
        paddingHorizontal: 15,
        flex:1,
    },
    img_box:{
         alignItems: "center"
    },
    txt_box:{
        flex:0.8,
        justifyContent: "center",
    },
    buttons_box1:{
        flex:0.6,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    buttons_box2:{
        flex:1,
    },
    img:{
        width: 350,
        height: 400,
        resizeMode:'contain'
    },
    
    text:{
        color:"white",
        fontSize: 22
    }

});