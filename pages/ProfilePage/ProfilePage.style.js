import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    
    main_box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#22668D",
      },
      innerView: {
        width: 412,
        height: 670,
        flex: 1,
        marginTop:70,
        backgroundColor: "white",
        justifyContent: "flex-end",
        alignItems: "center",
        borderTopLeftRadius:50,
        borderTopRightRadius:50

      },
      circle: {
        width: 150,
        height: 150,
        backgroundColor: "white",
        borderRadius: 80,
        position: "absolute",
        top: -50,
        alignItems:"center",
        justifyContent:"center" 
      },
      ava:{
        width: 120,
        height: 120,
        backgroundColor: "white",
        borderRadius: 80,
        position: "absolute",
        alignItems:"center",
        justifyContent:"center",
        
      },
      txt_info:{
        alignItems:"center",
      //  backgroundColor:"green",
        marginTop: 10,
        marginBottom: 25,
      },
      inputContainer:{
      //  backgroundColor:"blue",
        width: 412,
        height: 140,
        paddingHorizontal: 20,
        alignItems:"center"
      },
      input_box:{
        justifyContent: "space-evenly",
      //  backgroundColor:"red",
        width: 400,
        height: 200,
        alignItems:"center",
        paddingHorizontal: 10,
      },
      button_ext:{
        backgroundColor:"#7E7E7E", 
        // marginBottom: 40,
        marginTop: 0,
        width: 250
      },
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

    inputFeedback:{
        width: 412,
        height: 200,
        paddingHorizontal: 20,
        alignItems:"center",
        // backgroundColor:"pink",
        justifyContent:"center",
        marginTop: 100
    },
    input_feedback:{
      justifyContent: "space-evenly",
      // backgroundColor:"red",
       width: 400,
       height: 80,
       alignItems:"center",
       paddingHorizontal: 10,
    },
    buttons_box:{
      flexDirection:"row",
      alignItems:"center",
      // // marginBottom: 10,
      // backgroundColor:"blue",
      justifyContent: "space-evenly",
      marginHorizontal: 15,
      width: 412,

    
  },

});