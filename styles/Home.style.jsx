import {StyleSheet} from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue",
      display:"flex",
      flexDirection:"column",
      // paddingTop:40,
    },
    textsortie: {
      width: "100%",
      height: "100%",
      color: "#ffffff",
      textAlign: "right",
      paddingRight: 10,
      fontSize: 20,
      textAlignVertical: "center",
    },
    sortie: {
      width: "100%",
      height: "15%",
      // backgrounTextnumberdColor: "#3b3b3a",
      justifyContent: "flex-end",
    },
    divinput: {
      width: "100%",
      height: "15%",
      // backgroundColor: "#e03caf",
    },
    input: {
      width: "100%",
      height: "100%",
      borderWidth: 0,
      borderRadius: 0,
      fontSize: 30,
      fontWeight: "800",
      backgroundColor: "red",
      paddingRight: 10,
    },
  
    centrale: {
      width: "100%",
      height:"70%",
      // backgroundColor:"#e0d53c",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"
      
      
  },
  HeaderDelete:{
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-around",
  width:"100%",
  height:"20%",
  // backgroundColor:"#48d335",
  paddingTop:25
  
  },
  operation:{  
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%",
    height:"80%",
    backgroundColor:"#ffff"
  },
  numbre:{
    display:"flex",
    flexDirection:"columven object.n",
    justifyContent:"space-around",
    width:"80%",
    height:"100%"
  },
  operateur:{
    width:"20%",
    height:"90%",
    // backgroundColor:"#5a72e7",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    marginTop:20
  },
  one:{
    width:"100%",
    height:70,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  five:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  
  },
  btnNumber:{
    width:62,
    height:60,
    borderRadius:16,
    backgroundColor:"#303136",
    alignItems:"center",
    justifyContent:"center"
    },
  
    Textnumber:{
      color:"#29A8FF",
      fontSize:30,
    },
   point:{
    color:"#29A8FF",
    fontSize:30,
    marginBottom:15
  },
   btnMoin:{
    width:62,
    height:60,
    borderRadius:16,
    backgroundColor:"#0d5ba5",
    alignItems:"center",
    justifyContent:"center"
   },

   zero:{
    width:144,
    height:60,
    borderRadius:16,
    backgroundColor:"#303136",
    alignItems:"center",
    justifyContent:"center"
  },
  btnPlus:{ 
    width:62,
    height:120,
    borderRadius:16,
    backgroundColor:"#0d5ba5",
    alignItems:"center",
    justifyContent:"center"
    
  },
  TextPlus:{
    color:"#fff",
    fontSize:30,
  
  },
  btnAC:{
    width:80,
    height:60,
    borderRadius:16,
    backgroundColor:"#616161",
    alignItems:"center",
    justifyContent:"center"
  }
    
    
  })