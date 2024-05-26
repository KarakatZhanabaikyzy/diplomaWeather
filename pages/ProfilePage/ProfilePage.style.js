import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    
    main_box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#22668D",
      },
      innerView: {
        width: 370,
        height: 580,
        flex: 1,
        marginTop:70,
        backgroundColor: "white",
        justifyContent: "flex-end",
        alignItems: "center",
        borderTopLeftRadius:50,
        borderTopRightRadius:50

      },
      circle: {
        width: 120,
        height: 120,
        backgroundColor: "white",
        borderRadius: 80,
        position: "absolute",
        top: -50,
        alignItems:"center",
        justifyContent:"center" 
      },
      ava:{
        width: 100,
        height: 100,
        backgroundColor: "white",
        borderRadius: 80,
        position: "absolute",
        alignItems:"center",
        justifyContent:"center",
        
      },
      txt_info:{
        alignItems:"center",
      //  backgroundColor:"green",
        // paddingTop: 50,
        marginBottom: 5,
      },
      inputContainer:{
      //  backgroundColor:"blue",
        width: 400,
        height: 140,
        paddingHorizontal: 20,
        alignItems:"center",
        marginTop: 5
      },
      input_box:{
        justifyContent: "space-evenly",
      //  backgroundColor:"red",
        width: 362,
        height: 200,
        alignItems:"center",
        paddingHorizontal: 10,
        
      },
      button_ext:{
        backgroundColor:"#7E7E7E", 
        marginBottom: 40,
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
        paddingLeft: 13,
        color: "#000"
    },

    inputFeedback:{
        width: 400,
        height: 200,
        paddingHorizontal: 20,
        alignItems:"center",
        // backgroundColor:"pink",
        justifyContent:"center",
        marginTop: 145,
        
    },
    input_feedback:{
      justifyContent: "space-evenly",
      // backgroundColor:"red",
       width: 362,
       height: 80,
       alignItems:"center",
       paddingHorizontal: 10,
    },
    buttons_box:{
      flexDirection:"row",
      alignItems:"center",
      // marginBottom: 2,
      // backgroundColor:"blue",
      justifyContent: "space-evenly",
      marginHorizontal: 20,
      width: 360,
      // marginLeft: 10,
      // marginRight: 10
      
      
  },
  button_ext:{
    // marginBottom: 60,
    backgroundColor:"red"
  },
  btns_container:{
    // backgroundColor:"purple",
    justifyContent: "space-between",
    alignItems:"center",
    height: 130,
    marginBottom: 60
  },
  button_ext_container:{
    marginBottom: 15
  },
  buttonExt: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems:"center",
    borderRadius: 15,
    height: 50,
    width: 300,
    justifyContent:"center",
    backgroundColor: "#7E7E7E"
  },

});