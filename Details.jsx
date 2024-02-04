import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function Details({navigation,route}) {

    const { nom,Prenom,itemId} = route.params;

    
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>{nom }</Text>
      <Text>{Prenom}</Text>
      <Text>{itemId}</Text>
      {/* <Button
        title="Go to Test"
        onPress={() => navigation.navigate('Test')}
      /> */}


<Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:40,
        
      
       
      }
   
})