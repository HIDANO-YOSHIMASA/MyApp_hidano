import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {FlatList} from 'react-native-gesture-handler';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Food">;
};

export default function FoodScreen({ navigation }: Props) {

const memos = [
  {  
    text: "これがメモの内容だよ", 
    createdAt: new Date(), 
  }, 
  {
    text: "2つ目のメモだよ", 
    createdAt: 1585574700000, 
  }, 
  {
    text:
      "メモだよ３つ目のメモだよ", 
    createdAt: 1234567890123, 
  },
];

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={memos}
        renderItem={({item})=>{
        <Text>{item.text}</Text>
        keyExtractor={(item, index)=>index.toString()}
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
