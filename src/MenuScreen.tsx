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
      <Text style={{ fontSize: 20, marginBottom: 45 }}>Menu</Text>
      <TouchableOpacity style={{ flexDirection: "row", marginBottom: 45 }}>
        <Icon style={{ marginRight: 8 }} name="camera" size={20} />
        <Text>Food/フード</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", marginBottom: 45 }}>
        <Icon style={{ marginRight: 8 }} name="camera" size={20} />
        <Text>Drink/ドリンク</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Icon style={{ marginRight: 8 }} name="camera" size={20} />
        <Text>Sweetsスイーツ</Text>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <Button title="Home" onPress={() => navigation.goBack()} />
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
  }
});
