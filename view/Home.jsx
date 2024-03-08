import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard
} from "react-native";
import DeleteAll from "../components/DeleteAll";
import ButtonV1 from "../components/ButtonV1";
export default function Home({ navigation, route }) {
  // const { nom,Prenom,itemId} = route.params;
  const [data, setdata] = useState("12345556567886658578");
 

  return (
    <View style={styles.container}>
      <View style={styles.divinput}>
        <TextInput
          style={styles.input}
          value={data}
          textAlign="right"
          showSoftInputOnFocus={false}
          autoFocus={true}
          maxLength={20}
        />
      </View>
     
     <View style={styles.sortie} >
        <Text style={styles.textsortie}>sscckcknkcskscnkkncsn</Text>
      </View>

      <View style={styles.centrale}>

      <View style={styles.HeaderDelete}>
      <Button title="/" />
        <Button title="*" />
        <Button title="AC" />
        <DeleteAll activeOpacity={0.9}/>
      </View>

        <View style={styles.operation}>

          <View style={styles.numbre}>

          <View style={styles.one}>
              
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}>7</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} >8</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}>9</ButtonV1>
            </View>

            <View style={styles.one}>
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}  >4</ButtonV1>
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}  >5</ButtonV1>
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}  >6</ButtonV1>
              </View>

            <View style={styles.one}>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} >1</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} >2</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} >3</ButtonV1>
              </View>


           

            <View style={styles.five}>
            <ButtonV1  style={styles.zero} styleText={styles.Textnumber} activeOpacity={0.7} >0</ButtonV1>
            <ButtonV1  style={styles.btnNumber} styleText={styles.point} activeOpacity={0.7} >{"."}</ButtonV1>
            </View>
          </View>

          <View style={styles.operateur}>
          <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} >-</ButtonV1>
          <ButtonV1  style={styles.btnPlus} styleText={styles.TextPlus} activeOpacity={0.7} >+</ButtonV1>
          <ButtonV1  style={styles.btnPlus} styleText={styles.TextPlus} activeOpacity={0.7} >=</ButtonV1>
          </View>

        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-start",
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
    height: 70,
    backgroundColor: "#3b3b3a",
    justifyContent: "flex-end",
  },
  divinput: {
    width: "100%",
    height: 70,
    backgroundColor: "#e03caf",
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
    flex:1,
    backgroundColor:"#e0d53c",
    display:"flex",
    flexDirection:"column",
    
},
HeaderDelete:{
display:"flex",
flexDirection:"row",
width:"100%",
height:"20%"

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
  flexDirection:"column",
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
  color:"#fffff",
  fontSize:30,

},
  
  
});
