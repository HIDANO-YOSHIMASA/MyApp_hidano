import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Menu'>;
}

export default function MenuScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text>メニュー</Text>
      <TouchableOpacity>
        <Text>フード</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>ドリンク</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>スイーツ</Text>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <Button
        title='Home'
        onPress={()=>navigation.goBack()}
        />
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
