import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
       backgroundColor: "white",
       paddingBottom: 80,
       paddingTop: 60,
       paddingHorizontal: 15,
    //    flex:1,
       height: 750
    },
    hi:{
        flex: 0.3,
    },
    input_box:{
        justifyContent:"space-between",
        height: 310,
        marginBottom: 10,
        // backgroundColor:"pink"
    },
    redirection:{
        flex:0.5,
        justifyContent:"space-between",
       
    },
    signup:{
        flexDirection: "row",
        justifyContent: "center",
    },
    google:{
        flex:0.7,
        alignItems: "center",
        flexDirection:"column",
        justifyContent:"flex-end",
    },



    root:{
        alignSelf: "stretch",
        justifyContent: "center",
    },
    city:{
        backgroundColor: "#D2EBF2",
        height: 70,
        borderRadius: 15,
        paddingLeft: 25,
        width: 160,
        color:"#000"
    },
    genderCity:{
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    radiobutton_box:{
        flexDirection:"column",
        justifyContent: "space-between",
        alignItems:"center",
    },
    radiobutton:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 170,
        justifyContent:"space-evenly"
    },
    option: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFCC70',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        width:50
      },
      selectedOption: {
        backgroundColor: '#FFCC70',
        alignItems: 'center',
        justifyContent:"center",
      },
      label: {
        fontSize: 16,
        color: 'black',
        justifyContent:"center",
        alignItems:"center"
      },
      input_text:{
        backgroundColor: "#D2EBF2",
        height: 70,
        borderRadius: 15,
        paddingLeft: 25,
        color:"#000"
       
    },
   
});