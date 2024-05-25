import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
 
   chat_box:{
    alignItems:"center",
    height:400,
    marginTop: 15,
    marginBottom: 12,
    width: 335,
    backgroundColor: "#FFFADD",
    justifyContent:"space-between",
    borderRadius: 15
    
},
   header_container:{
   backgroundColor:"#CADCE7",
   width: 335,
   borderTopLeftRadius: 15,
   borderTopRightRadius: 15,
   height: 42,
   alignItems: "center"
   },
   header_txt:{
   fontSize: 18, 
   marginTop: 8,
   color: "#22668D",
   },
   txt_box: {
   //   backgroundColor:"red",
     width: 300,
     flexDirection:"row",
     justifyContent: "space-between",
     marginRight: 38
    //  marginBottom: 15
   },
   txt_input:{
    borderColor: "#22668D", 
    borderWidth: 2, 
    backgroundColor: "#FFFADD",
    height: 50,
    width: 280,
    borderRadius: 15,
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingLeft: 13,
    color: "black"


   },
   btn_send:{
    backgroundColor:"#22668D",
    borderRadius: 15,
    width: 50,
    height: 50,
    paddingHorizontal: 2,
    paddingBottom: 15,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 5

   },
   btn_txt:{
    fontSize: 35    , 
    fontWeight: "bold",
    alignItems: "center",
    color: "white"
   }

});