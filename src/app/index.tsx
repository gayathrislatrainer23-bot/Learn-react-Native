import { TextInput } from "react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Counter from "../components/Counter"



export default function HomeScreen() {
  return (

    <View style ={commonStyles.container}>
  <Text style={{ fontSize: 30 }}>Hello</Text>
  <Text style={{fontSize: 32}}>h1</Text>
  <button>click</button>
  {/* <Pressable>click</Pressable> */}
<TextInput   style={{
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  }}/>
  <Counter/>
  </View>

  );
}

let commonStyles =StyleSheet.create({
container : {
     flex: 1,
        justifyContent: "center",
        alignItems: "center"
}
})

