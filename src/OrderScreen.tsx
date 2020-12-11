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
  const [result, setResult] = useState(0);

  const calcResult = () => {
    const calc = count * 0.8;
    setResult(calc)
  }
  
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

  const countItems = (
    <View style={styles.countContainer}>
      <Text style={{ fontSize: 12 }}>数量</Text>
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <Pressable style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <Text style={{ fontSize: 24, marginRight: 12}} onPress={countUp}>
            +
          </Text>
          <Text style={{ fontSize: 45 }} onPress={countDown}>
            -
          </Text>
        </View>
      </Pressable>
    </View>

  )


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1.8}}>
        <Image
          source={Pic01}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text>テイクアウト</Text>
        {countItems}
      </View>

      <View style={{ flex: 1 }}>
        <Text>イートイン</Text>
        {countItems}
      </View>

      <View style={{ flex: 1 }}>
        <Pressable style={styles.button}>
          <Text onPress={calcResult}>ご注文</Text>
        </Pressable>
        <Text>{result}円</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  countContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    fontSize: 12,
    borderRadius: 8,
    borderWidth: 2,
    color: "white",
    padding: 10,
  },
});
