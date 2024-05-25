import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
        alignItems: "center",
        // backgroundColor: "red"
    },
    headerStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop: 10,
        marginRight: 45
    },
    img_box:{
        width: 120,
        height: 150,
        marginRight: 10,
        resizeMode:'contain'
    },
    girlWindy:{
        width: 120,
        height: 150,
        resizeMode:'contain'
   },
   txt_choice:{
    fontSize: 18
   },
   txt_favs:{
    fontSize: 15,
    color:"white",
   },

   flatlistContainer:{
   alignItems: "center",
//    backgroundColor:"blue",
   width: 360,
   flexDirection:"row",
   justifyContent:"space-evenly",
   marginTop: 5
   
   },
   imageContainer: {
    // flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: "center",
    alignItems: 'center',
    // backgroundColor: "green",
    height: 160,
    width: 160
    },
    image: {
    width: 160,
    height: 160,
    borderRadius: 20
    },
    description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5
    }
   
});