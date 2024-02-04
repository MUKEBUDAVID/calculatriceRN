import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Memo({ navigation }) {
  return (
    <View>
      <Text>Memo pour react navitaion</Text>

      <View>
         Se desplacer entre les ecrants

        {/* pour navige vers le screen home */}
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />

        {/* pour navige dans le meme screen */}
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push("Details")}
        />

        {/* pour navige vers le screen precedent */}
        <Button title="Go back" onPress={() => navigation.goBack()} />

        {/* pour navige vers le  screen initiale  */}
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>







      <View>
        {/* Passer des paramètres aux Screens suivant */}
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here",
            });
          }}
        />


        {/* Passer des paramètres aux Screens Precedent */}
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: "Home",
              params: { post: "postText" },
              merge: true,
            });
          }}
        />


        {/* recupere des paramètres qui vient du Screens precedent et suivant*/}

        {/* function DetailsScreen({ route, navigation }) {  */}
         /* 2. Get the param */
        {/* const { itemId, otherParam } = route.params */}

        return ({/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
        {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}

        {/* Passer des paramètres initiaux aux Screens */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
        />


        {/* mettre à jour des paramètres aux Screens suivant et precedent */}
        {navigation.setParams({
          query: "someText",
        })}
        {/*
        

N.B:Évitez d'utiliser setParamspour mettre à jour les options d'écran telles que title etc. 
Si vous devez mettre à jour les options, utilisez-les setOptions à la place. */}
{
    <Button
    title="Update the title"
    onPress={() => navigation.setOptions({ title: 'Updated!' })}
  />
}





 {/* Passer des paramètres aux  navigateurs imbriqués */}

{
navigation.navigate('Account', {
    screen: 'Settings',
    params: { user: 'jane' },
  })
  
} 

{/* Utiliser des paramètres dans le title  */}

{function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}
}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
