import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
 
   chat_box:{
    alignItems:"center",
    height:500,
    marginTop: 15,
    marginBottom: 12,
    width: 380,
    backgroundColor: "#FFFADD",
    justifyContent:"space-between",
    borderRadius: 15
    
},
   header_container:{
   backgroundColor:"#CADCE7",
   width: 380,
   borderTopLeftRadius: 15,
   borderTopRightRadius: 15,
   height: 48,
   alignItems: "center"
   },
   header_txt:{
   fontSize: 20, 
   marginTop: 10,
   color: "#22668D",
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
    paddingLeft: 13


   },
   btn_send:{
    backgroundColor:"#22668D",
    borderRadius: 15,
    width: 60,
    height: 50,
    paddingHorizontal: 2,
    paddingBottom: 15,
    alignItems:"center",
    justifyContent:"center",

   },
   btn_txt:{
    fontSize: 35    , 
    fontWeight: "bold",
    alignItems: "center",
    color: "white"
   }

});