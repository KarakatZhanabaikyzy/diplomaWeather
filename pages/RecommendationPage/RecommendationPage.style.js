import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main_box:{
        alignItems: "center",
        backgroundColor:"white"
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
        resizeMode:'contain',
        backgroundColor:"white"
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
    height:420,
    marginTop: 15,
    width: 380,
   backgroundColor:"white",
    justifyContent:"space-between",
    
},
img_carousel:{
    width: 320,
    height: 320,
    flexDirection:"row",
    alignItems:"center",
    marginTop: 10,
    backgroundColor:"white",
    borderRadius: 10
},
buttons_box:{
    flexDirection:"row",
    alignItems:"center",
    marginTop: 5,
    marginBottom: 10,
    width: 400,
    // backgroundColor:"red",
    justifyContent: "space-evenly",
    paddingHorizontal: 20
},
back_btn:{
    backgroundColor:"white",
    borderColor:"#22668D",
    borderWidth: 1.5,
},

categoryContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:"center",
    paddingVertical: 10,
    backgroundColor:"#FFCC70",
    marginHorizontal: 15,
    borderRadius: 15,
    width: 382,
    marginTop: 18
  },
  categoryText: {
    fontSize: 18,
    color: 'white',
  },
  activeCategoryText: {
    fontWeight:"bold",
    color: 'black',
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    alignItems: 'center',
    justifyContent: 'center', 
    zIndex: 100, // overlay над другими элементами
  }
});