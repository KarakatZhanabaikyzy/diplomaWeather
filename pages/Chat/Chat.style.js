import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
 
   recommendation_box:{
    alignItems:"center",
    height:500,
    marginTop: 15,
    marginBottom: 12,
    width: 380,
   backgroundColor: "#FFFADD",
    justifyContent:"space-between",
    borderRadius: 15
    
},
   txt_box: {
    //  backgroundColor:"red",
     width: 380,
     flexDirection:"row",
     justifyContent: "space-between",
    //  marginBottom: 15
   },
   txt_input:{
    borderColor: "#22668D", 
    borderWidth: 2, 
    backgroundColor: "#FFFADD",
    height: 50,
    width: 315,
    borderRadius: 15,
    flexDirection:"row",
    justifyContent:"space-evenly",


   },
   btn_send:{
    backgroundColor:"#22668D",
    borderRadius: 15,
    width: 60,
    height: 50
   },
   btn_txt:{
    fontSize: 15    , 
    // fontWeight: "bold",
    // flexDirection:"row",
    alignItems: "center",
    // justifyContent:"center",
    marginHorizontal: 3,
    marginVertical: 1
   }

});