import React from "react";
import { StyleSheet, Text, View, Button, Image, SafeAreaView, Platform, FlatList,} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Result">;
};

export default function ResultScreen({ navigation }: Props) {
  return(

    <SafeAreaView>
      <View>
        <FlatList
          data={null}
          renderItem={null}
          keyExtractor={(item)=>(item)}
        />
      </View>
    </SafeAreaView>
  )
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
