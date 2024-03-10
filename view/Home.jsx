import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image
} from "react-native";
import DeleteAllv2 from "../components/DeleteAllv2";
import ButtonV1 from "../components/ButtonV1";
import styles from "../styles/Home.style"
export default function Home({ navigation, route }) {
  // const { nom,Prenom,itemId} = route.params;
  const [data, setdata] = useState("");
  const [sortie,setSortie]=useState();

 const DeleteOne=()=>{
  let temp=data;
   temp=temp.replace(/.$/, "");
  setdata(temp);
  alert(data)
  Result() 
 };

 const DeleteAll=()=>{
  setdata(" ");
 };
 const Result=()=>{
  setSortie(eval(data));
}



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
        <Text style={styles.textsortie} >{sortie}</Text>
      </View>

      <View style={styles.centrale}>

      <View style={styles.HeaderDelete}>
      <ButtonV1 style={styles.btnAC} styleText={styles.TextPlus} activeOpacity={0.7} onPress={DeleteAll}>AC</ButtonV1>
       <DeleteAllv2 activeOpacity={0.9} style={styles.btnAC} onPress={DeleteOne}><Image source={require("../assets/Vector.png")} /></DeleteAllv2>
      <ButtonV1 style={styles.btnMoin} styleText={styles.TextPlus} activeOpacity={0.7} onPress={()=>{setdata(data=>data+="/")  }}>/</ButtonV1>
      <ButtonV1 style={styles.btnMoin} styleText={styles.TextPlus} activeOpacity={0.7} onPress={()=>{setdata(data=>data+="*")  }}>*</ButtonV1>
      </View>

        <View style={styles.operation}>

          <View style={styles.numbre}>

          <View style={styles.one}>
              
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} onPress={()=>{setdata(data=>data+=7)  }}>7</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} onPress={()=>{setdata(data=>data+=8)  }}>8</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} onPress={()=>{setdata(data=>data+=9)  }}>9</ButtonV1>
            </View>

            <View style={styles.one}>
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}  onPress={()=>{setdata(data=>data+=4)  }}>4</ButtonV1>
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}  onPress={()=>{setdata(data=>data+=5)  }}>5</ButtonV1>
              <ButtonV1 style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7}  onPress={()=>{setdata(data=>data+=6)  }}>6</ButtonV1>
              </View>

            <View style={styles.one}>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} onPress={()=>{setdata(data=>data+=1)  }} >1</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} onPress={()=>{setdata(data=>data+=2)  }}>2</ButtonV1>
              <ButtonV1  style={styles.btnNumber} styleText={styles.Textnumber} activeOpacity={0.7} onPress={()=>{setdata(data=>data+=3)  }}>3</ButtonV1>
              </View>


           <View style={styles.five}>
            <ButtonV1  style={styles.zero} styleText={styles.Textnumber} activeOpacity={0.7}onPress={()=>{setdata(data=>data+=0)}}  >0</ButtonV1>
            <ButtonV1  style={styles.btnNumber} styleText={styles.point} activeOpacity={0.7} onPress={()=>{setdata(data=>data+=".")  }}>{"."}</ButtonV1>
            </View>
          </View>

          <View style={styles.operateur}>
          <ButtonV1  style={styles.btnMoin} styleText={styles.TextPlus} activeOpacity={0.7} onPress={()=>{setdata(data=>data+="-")  }} >-</ButtonV1>
          <ButtonV1  style={styles.btnPlus} styleText={styles.TextPlus} activeOpacity={0.7} onPress={()=>{setdata(data=>data+="+")  }} >+</ButtonV1>
          <ButtonV1  style={styles.btnPlus} styleText={styles.TextPlus} activeOpacity={0.7} onPress={Result} >=</ButtonV1>
          </View>

        </View>

        
      </View>
    </View>
  );
}


