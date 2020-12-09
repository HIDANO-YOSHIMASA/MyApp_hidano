import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground, Platform } from "react-native";
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
        <Text style={{fontSize: 12, letterSpacing: 2, color: 'white', marginBottom: 20,}}>Contemporary Restaurant</Text>
      </View>

        <ImageBackground
          source={Pic01}
          style={styles.backgroundImage} />
        {/* <Button style={styles.buttons} title="to Menu" onPress={() => navigation.navigate("Menu")} /> */}

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
    // flex: 1,
    // flexDirection: "row",
    justifyContent: "space-around",
  },
  backgroundImage: {
    flex: 4,
    width: 500,
    height: 600,
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
