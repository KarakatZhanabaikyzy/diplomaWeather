import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
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
    fontWeight:"bold",
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedItem: {
    backgroundColor: 'lightgrey',
    

  },
  itemImage: {
    width: 180,
    height: 180,
    borderRadius: 25,
    marginRight: 10,
  },
  itemLabel: {
    fontSize: 16,
    color: '#333',
  },
  txt_style:{
    marginVertical:10,
    marginLeft: 92,
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
});