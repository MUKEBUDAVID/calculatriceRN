import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

export default function DeleteAllv2({
    onPress,
    onLongPress,
    style,
    textStyle,
    disabled,
    activeOpacity,
    loading,
  }) {
    
  return (
    <View style={styles.container}>
    <Pressable
      onPress={() => {
        // alert("david est la")
      }}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.wrapperCustom,
      ]}>

      {({pressed}) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )}
      
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6,
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
  });
  