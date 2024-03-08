import { Text,Pressable} from 'react-native'
import React from 'react'

export default function ButtonV1({
    onPress,
    onLongPress,
    style,
    styleText,
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


      <Text style={styleText}>{children}</Text>
   
    
  </Pressable>
  )
}
