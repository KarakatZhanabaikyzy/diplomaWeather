import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  flatlistContainer: {
    flex: 1, // This makes sure the container takes up all available space
    padding: 10, // Optional: adds some padding around the FlatList
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
    rainGirl:{
        width: 120,
        height: 150,
        resizeMode:'contain'
   },
   txt_choice:{
    fontSize: 18
   },

   categoryContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:"center",
    paddingVertical: 10,
    backgroundColor:"#FFCC70",
    marginHorizontal: 15,
    borderRadius: 15
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
  },
  activeCategoryText: {
    // fontWeight:"bold",
    color: 'black',
  },
  flatlistContainer:{
    // backgroundColor:"blue",
    width: 380,
    flexDirection:"row",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5
    
    },
  itemContainer: {
    justifyContent:"center",
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    marginLeft: 6
  },
  selectedItem: {
    backgroundColor: 'lightgrey',
    borderRadius: 15
    

  },
  itemImage: {
    width: 165,
    height: 165,
    borderRadius: 15,
    padding: 5
  },
  itemLabel: {
    fontSize: 20,
    color: '#333',
  },
  txt_style:{
    marginVertical:10,
    marginLeft: 92,
    flexDirection:"row",
    alignItems:"center",
  },
  buttons_box:{
    flexDirection:"row",
    alignItems:"center",
    marginTop: 50,
    marginBottom: 10,
    //backgroundColor:"red",
    justifyContent: "space-evenly",
    marginHorizontal: 15
  
},
back_btn:{
    backgroundColor:"white",
    borderColor:"#22668D",
    borderWidth: 1.5,
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
},
basicCategory:{
  height: 40,
  width: 85,
  //  backgroundColor:"red",
  alignItems:"center",
  justifyContent:"center",
  borderRadius: 12,
},

chosenCategory:{
  height: 40,
   width: 85,
    backgroundColor: "#FFFADD",
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 12,
},


});