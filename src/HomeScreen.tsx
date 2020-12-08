import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Platform } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import logo from "../assets/sparta.jpg";
import Pic01 from "../assets/hamburger.jpg";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        {/* <Image
          source={logo}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
        /> */}
        <Text style={{fontSize: 24, letterSpacing: 1, color: 'white'}}>Contemporary Restaurant</Text>
      </View>

        <Image
          source={Pic01}
          style={styles.middleContainer} />
        <Button style={styles.buttons} title="to Menu" onPress={() => navigation.navigate("Menu")} />

      <View style={styles.bottomContainer}>
        <Button title="ログイン" onPress={() => navigation.navigate("Menu")} />
        <Button title="新規登録" onPress={() => navigation.navigate("Menu")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  middleContainer: {
    flex: 4,
    width: 700,
    height: 700,
    resizeMode: "contain",
    marginBottom: 10,
  },
  buttons: {
    width: 50,
    padding: 5,
    borderRadius: 6,
    position: "absolute",
    top: 100,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
