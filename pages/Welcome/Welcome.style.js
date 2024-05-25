import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
        paddingBottom: 90,
        paddingTop: 55,
        paddingHorizontal: 15,
        flex:1,
        backgroundColor: "white",
    },
    img_box:{
         alignItems: "center",
        //  backgroundColor: "red",
    },
    txt_box:{
        flex:10,
        marginTop: 12,
        marginBottom: 2,
        justifyContent: "center",
        // backgroundColor: "blue",
    },
    buttons_box1:{
        flex:0.2,
        marginTop: 40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // backgroundColor: "green",
    },
    buttons_box2:{
        flex:1,
        marginTop: 60,
        justifyContent:"center",
        // backgroundColor: "pink",
    },
    img:{
        width: 350,
        height: 400,
        resizeMode:'contain',
        // backgroundColor: "red",
    },
    
    text:{
        color:"white",
        fontSize: 22,
    },
    buttons_container:{
        // backgroundColor:"pink",
        
    },

});