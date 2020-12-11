import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Menu'>;
}

export default function MenuScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.spacer}></View>
        <Text style={styles.text}>Menu</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate('Food')}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  spacer: {
    flex: 2,
  },
  icon: {
    marginRight: 8,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 45,
  },
  text: {
    fontSize: 20,
    marginBottom: 45,
  },
});
