import React, {useState} from "react";
import { StyleSheet, Text, View, Button, Image, Pressable, SafeAreaView, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Pic01 from "../assets/hamburger.jpg";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Order">;
};

export default function FoodScreen({ navigation }: Props) {

  const [count, setCount] = useState(0);
  const [take, setTake] = useState(0);
  
  // const countItems = () => {
  //   return (
  //     <View>
  //       <Text style={{ fontSize: 16 }}>数量</Text>
  //       <Text style={{ fontSize: 45 }}>{count}</Text>
  //       <Pressable>
  //         <Text style={{ fontSize: 24 }} onPress={countUp}>
  //           +
  //         </Text>
  //         <Text style={{ fontSize: 45 }} onPress={countDown}>
  //           -
  //         </Text>
  //       </Pressable>
  //     </View>
  //   );
  // };

  const countUp = () => {
    setCount(count + 1);
  }
  
  const countDown = () => {
    setCount(count - 1);
  }

  const takeUp = () => {
    setTake(take + 1);
  }
  
  const takeDown = () => {
    setTake(take - 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 4 }}>
        <Image
          source={Pic01}
          style={{ width: 350, height: 350, resizeMode: "contain" }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16 }}>数量</Text>
        <Text style={{ fontSize: 45 }}>{count}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Pressable style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 24, marginRight: 12 }} onPress={countUp}>
              +
            </Text>
            <Text style={{ fontSize: 45 }} onPress={countDown}>
              -
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16 }}>数量</Text>
        <Text style={{ fontSize: 45 }}>{take}</Text>
        <Pressable>
          <Text style={{ fontSize: 24 }} onPress={takeUp}>
            +
          </Text>
          <Text style={{ fontSize: 45 }} onPress={takeDown}>
            -
          </Text>
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        <Text>合計金額</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
