import React, {useState} from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Pic01 from "../assets/hamburger.jpg";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Order">;
};

export default function FoodScreen({ navigation }: Props) {

  const [count, setCount] = useState(0);
  
  const countNumber = () => {
    return(
      <View>
        <Text>数量</Text>
        <Text>{count}</Text>
        <Pressable>
          <Text>+</Text>
          <Text>-</Text>
        </Pressable>
      </View>
    );
  };

  counst countUp = () => {

  }

  return(
    <View style={styles.container}>
      <Image
        source={Pic01}
        style={{width: 100, height: 100, resizeMode: 'contain',}}
      />
      {countNumber}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
