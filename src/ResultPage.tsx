import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, Image, SafeAreaView, Platform, FlatList,} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationHelpersContext, RouteProp, useNavigation } from "@react-navigation/native";
import pic01 from '../assets/hamburger.jpg'; 
import { loadAll } from "./Store"; 


// type Props = {
//   navigation: StackNavigationProp<RootStackParamList, "Result">;
// };

type OrderScreenRouteProps = RouteProp<RootStackParamList, "Result">;

type Props = {
  route: OrderScreenRouteProps;
};
                

export default function ResultScreen(props: Props) {  
  const [list, setList] = useState<List[]>([]);
  const navigation = useNavigation;

  useEffect(() => {
    const initialize = async () => {
      // awaitで読み込みが終わるまで待機
      const newLists = await loadAll();
      setList(newLists);
    };
    // 画面が戻ってきた時に動作するようにnavigationの動作に追加
    // navigation.addListener("focus", initialize);
  });                
    
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item})=>(
          <Text>{item.price}</Text>
        )}
        keyExtractor={(item, index)=>(index.toString())}
      />
      <View style={{ alignItems: "center" }}>
        <Text>合計金額</Text>
        <Text>12,000</Text>
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
  images: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
