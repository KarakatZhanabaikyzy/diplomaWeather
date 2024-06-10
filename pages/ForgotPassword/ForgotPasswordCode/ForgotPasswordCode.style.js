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
        alignItems: "center"
    },
    input_box:{
        justifyContent:"space-between",
        height: 210,
        // backgroundColor:"pink",
        marginBottom: 170,
        alignItems:"center"
    },
    forgot:{
        flexDirection: "row",
        justifyContent:"flex-end",
        // backgroundColor:"red"
    },
    redirection:{
        flex:1,
        justifyContent: "space-evenly",
        alignItems:"center"
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
        paddingLeft: 15,
        color:"#000"
    }
   
});