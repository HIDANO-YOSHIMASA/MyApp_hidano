import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Menu'>;
}

export default function MenuScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}></View>
      <Text style={styles.text}>Menu</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon style={styles.icon} name="coffee" size={20} />
        <Text>Food/フード</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon style={styles.icon} name="coffee" size={20} />
        <Text>Drink/ドリンク</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Icon style={styles.icon} name="coffee" size={20} />
        <Text>Sweets/スイーツ</Text>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <Button
        title="ご注文はこちらから"
        onPress={() => navigation.navigate("Order")}
      />
      {/* <Button title="Home" onPress={() => navigation.goBack()} /> */}
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
  spacer: {
    flex: 2,
  },
  icon: {
    marginRight: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 45,
  },
  text: {
    fontSize:20,
    marginBottom: 45,

  }
});
