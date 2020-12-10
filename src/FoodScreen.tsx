import React from "react";
import { StyleSheet, Text, View, Button, Image, FlatList} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";


type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Food">;
};

export default function FoodScreen({ navigation }: Props) {

const menu = [
  {  
    uri:"../assets/hamburger.png",
    title: "牛肉のステーキ", 
    text: "美味しいお肉", 
    price: 1000,
  }, 
  {  
    uri:"../assets/hamburger.png",
    title: "牛肉のステーキ", 
    text: "美味しいお肉", 
    price: 1000,
  }, 
  {  
    uri:"../assets/hamburger.png",
    title: "牛肉のステーキ", 
    text: "美味しいお肉", 
    price: 1000,
  }, 
  
];

  
  return (
    <View></View>
    // <View>
    //   <Image
    //     source={uri: menu[0].uri}
    //   />
    // </View>

    // <FlatList
    // data={menu}
    // renderItem={({item})=>(
    //   <View>
    //     <Image source={{item.uri}}/>
    //     <Text>{item.title}</Text>
    //     <Text>{item.text}</Text>
    //   </View>
    // )}
    // keyExtractor={(item, index)=>index.toString()}
    // />
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
