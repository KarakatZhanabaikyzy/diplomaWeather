import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
        backgroundColor: "white",
       paddingBottom: 80,
       paddingTop: 60,
       paddingHorizontal: 15,
       flex:1,
    },
    hi:{
        flex: 0.5,
    },
    input_box:{
        justifyContent:"space-between",
        flex:0.3,
    },
    forgot:{
        flexDirection: "row",
        justifyContent:"flex-end",
    },
    redirection:{
        flex:1,
        justifyContent: "space-evenly"
    },
    signup:{
        flexDirection: "row",
        justifyContent: "center",
    },
    google:{
        flex:1,
        alignItems: "center",
        flexDirection:"column",
        justifyContent:"flex-end"
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