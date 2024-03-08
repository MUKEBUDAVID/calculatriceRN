
import {TouchableOpacity, StyleSheet, ActivityIndicator,Image} from "react-native";
import React from "react";

export default function DeleteAll({
    onPress,
    onLongPress,
    style,
    textStyle,
    disabled,
    activeOpacity,
    loading,
  }) {
  return (
    <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
    style={[disabled ? styles.disabledButton : styles.button, style]}
    
  >
    <Image source={require("../assets/Vector.png")}/>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#42a5f5",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      // Add any additional styles or override default styles here
    },
    disabledButton: {
      backgroundColor: "grey",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    image: {
        
  
    },
  });