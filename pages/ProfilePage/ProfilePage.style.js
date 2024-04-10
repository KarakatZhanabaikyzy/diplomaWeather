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
        height: 600,
        flex: 1,
        marginTop: 90,
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
        top: -50, // Отрицательное значение, чтобы круг выходил за пределы внутреннего View
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
        justifyContent:"center"
      },
      txt_info:{
        alignItems:"center",
     //   backgroundColor:"green",
        marginTop: 25,
        marginBottom: 15
      },
      inputContainer:{
     //   backgroundColor:"blue",
        width: 412,
        height: 300,
        paddingHorizontal: 20,
        alignItems:"center"
      },
      input_box:{
        justifyContent: "space-evenly",
       // backgroundColor:"red",
        width: 400,
        height: 200,
        alignItems:"center",
        paddingHorizontal: 10,
      },
      button_ext:{
        backgroundColor:"#22668D", 
        marginBottom: 40,
        marginTop: 120,
      },

});