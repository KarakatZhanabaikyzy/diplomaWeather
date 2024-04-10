import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    root:{
        alignSelf: "stretch",
        justifyContent: "center",
    },
    input:{
        backgroundColor: "#EFEFEF",
        height: 50,
        borderRadius: 15,
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    edit:{
        width: 20,
        height: 20,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"flex-end"
    },
});