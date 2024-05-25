import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
       backgroundColor: "white",
       paddingBottom: 80,
       paddingTop: 60,
       paddingHorizontal: 15,
    //    flex:5,
    height: 700
    },
    hi:{
        flex: 0.5,
        // backgroundColor:"white"
    },
    input_box:{
        justifyContent:"space-between",
        height: 170,
        // backgroundColor:"pink"
    },
    forgot:{
        flexDirection: "row",
        justifyContent:"flex-end",
        // backgroundColor:"red"
    },
    redirection:{
        flex:1,
        justifyContent: "space-evenly"
    },
    signup:{
        flexDirection: "row",
        justifyContent: "center",
        // backgroundColor: "blue"
    },
    google:{
        flex:1,
        alignItems: "center",
        flexDirection:"column",
        justifyContent:"flex-end",
        // backgroundColor:"yellow"
    },
    root:{
        alignSelf: "stretch",
        justifyContent: "center",
    },
    input_text:{
        backgroundColor: "#D2EBF2",
        height: 70,
        borderRadius: 15,
        paddingLeft: 25,
    }
   
});