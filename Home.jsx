import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState,useEffect } from "react";

export default function Home({ navigation }) {
 const [count, setCount] = React.useState(0);


 useEffect(() => {
   
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });


  }, [navigation]);








  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>home</Text>

      <View style={styles.locale}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate("Details", {
              nom: "mukebu",
              Prenom: "David",
            })
          }
        />

        <View></View>
        <Button
          title="Go to Test"
          onPress={() => navigation.navigate("Test")}
        />
      </View>

      <View style={styles.divinput}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setText(text)}
          placeholder="Type something"
          placeholderTextColor="grey"
          value={" "}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locale: {
    justifyContent: "space-between",
    width: 200,
    height: 100,
  },
  divinput: {
    width: 200,
    height: 50,
    marginTop: 50,
  },
  input: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "left",
    paddingLeft: 10,
  },
});
