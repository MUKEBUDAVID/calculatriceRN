import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

export default function DeleteAllv2({
  onPress,
  onLongPress,
  style,
  activeOpacity,
  children
  }) {
    
  return (
    
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          opacity:pressed? activeOpacity:null
        },
        style
      ]}>
        
   {children}
    
      
    </Pressable>
  
  )
}

