import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import backImage from '../assets/christmas.jpg';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Menu'>;
}

export default function MenuScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={backImage} />
      <View style={{ position: "absolute", top: 220 }}>
        <View style={styles.spacer}></View>
        <Text style={styles.text}>・・Menu・・</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Food")}
        >
          <Icon style={styles.icon} name="coffee" size={20} />
          <Text style={styles.textStyle}>Food/フード</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Icon style={styles.icon} name="coffee" size={20} />
          <Text style={styles.textStyle}>Drink/ドリンク</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Icon style={styles.icon} name="coffee" size={20} />
          <Text style={styles.textStyle}>Sweets/スイーツ</Text>
        </TouchableOpacity>
        <View style={styles.spacer}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gray",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  spacer: {
    flex: 0.3,
  },
  icon: {
    color: "tomato",
    marginRight: 8,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 45,
  },
  text: {
    color: "white",
    backgroundColor: "green",
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 45,
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    // borderColor:'tomato',
    // borderBottomWidth:2,
    padding: 4,
    borderRadius: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
});
