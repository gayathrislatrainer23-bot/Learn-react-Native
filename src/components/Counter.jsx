import React, { useState } from 'react'
import { View, Text ,Pressable} from 'react-native'


const  Counter = () => {
    const [counter,setCounter]= useState(0)
  return (
    <View>
        <Pressable onPress={()=>setCounter(counter+1)} ><Text>+</Text></Pressable>
        <Text>{counter}</Text>
         <Pressable onPress={()=>setCounter(counter-1)} ><Text>-</Text></Pressable>

    </View>
  )
}

export default Counter