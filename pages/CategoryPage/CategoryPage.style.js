import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
        alignItems: "center"
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
   recommendation_box:{
    alignItems:"center",
    height:510,
    marginTop: 15,
    width: 380,
//    backgroundColor:"blue",
    justifyContent:"space-between",
    
},
img_carousel:{
    width: 380,
    height: 380,
    flexDirection:"row",
    alignItems:"center",
    marginTop: 15,
    backgroundColor:"white",
    borderRadius: 10
},
buttons_box:{
    flexDirection:"row",
    alignItems:"center",
    marginTop: 5,
    marginBottom: 10,
    width: 400,
    //backgroundColor:"red",
    justifyContent: "space-evenly"
},
back_btn:{
    backgroundColor:"white",
    borderColor:"#22668D",
    borderWidth: 1.5,
},
basicCategory:{
   height: 40,
   width: 120,
//    backgroundColor:"red",
   alignItems:"center",
   justifyContent:"center",
   borderRadius: 12,
},

categoryContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems:"center",
    paddingVertical: 10,
    backgroundColor:"#FFCC70",
    marginHorizontal: 15,
    borderRadius: 15,
    width: 382,
    marginTop: 18
  },
  chosenCategory:{
    height: 40,
   width: 120,
    backgroundColor: "#FFFADD",
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 18,
    color: 'white',
  },
  activeCategoryText: {
    
    color: 'black',
  },
});