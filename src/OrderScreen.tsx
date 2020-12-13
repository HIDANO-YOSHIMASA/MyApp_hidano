import React, {useState,} from "react";
import { StyleSheet, Text, View, Button, Image, Pressable, SafeAreaView, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  NavigationHelpersContext,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { save } from "./Store"; 


// type Props = {
//   navigation: StackNavigationProp<RootStackParamList, "Order">;
// };

// 型を設定
type OrderScreenRouteProps = RouteProp<RootStackParamList, 'Order'>;

type Props = {
  route: OrderScreenRouteProps;
};

export default function OrderScreen(props: Props) {
  const info: MenuInfo = props.route.params.menuInfo

  const navigation = useNavigation();

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [resultA, setResultA] = useState(0);
  const [resultB, setResultB] = useState(0);
  // const [price, setPrice] = useState(0);

      const onSave = () => {
        save(title, price, Date.now());
        navigation.navigate("Result");
      };

      const countUp = () => {
        setCountA(countA + 1);
        setResultA((countA +1) * info.price * 1.08);
      }
      const countDown = () => {
        setCountA(countA - 1);
        setResultA((countA -1) * info.price * 1.08);
        if(countA === 0){
          setCountA(0)
          setResultA(0);
        }
      }
      const countUp2 = () => {
        setCountB(countB + 1);
        setResultB((countB +1) * info.price * 1.1);
      }
      const countDown2 = () => {
        setCountB(countB - 1);
        setResultB((countB -1) * info.price * 1.1);
        if(countB === 0){
          setCountB(0);
          setResultB(0);
        }
      }
      const finalResult = Math.floor((resultA + resultB));
  
  

  const countItems = (
    <View style={styles.countContainer}>
      <Text style={{ fontSize: 12 }}>数量</Text>
      <Text style={{ fontSize: 30 }}>{countA}</Text>
      <Pressable style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <Text style={styles.calcButton} onPress={countUp}>
            +
          </Text>
          <Text
            style={styles.calcButton}
            onPress={countDown}
          >
            −
          </Text>
        </View>
      </Pressable>
    </View>
  );
  const takeItems = (
    <View style={styles.countContainer}>
      <Text style={{ fontSize: 12 }}>数量</Text>
      <Text style={{ fontSize: 30 }}>{countB}</Text>
      <Pressable style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={styles.calcButton} onPress={countUp2}>
            +
          </Text>
          <Text style={styles.calcButton} onPress={countDown2}>
            −
          </Text>
        </View>
      </Pressable>
    </View>
  )


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1.8 }}>
        <Image
          source={info.pic}
          style={{ width: 250, height: 250, resizeMode: "contain" }}
        />
        <Text style={{textAlign: 'center',fontSize: 21}}>￥{info.price}円</Text>
      </View>
      <View style={{flex:1, flexDirection: "row", justifyContent:'space-around', }}>
        <View>
          <Text style={styles.title}>テイクアウト</Text>
          {countItems}
        </View>

        <View>
          <Text style={styles.title}>イートイン</Text>
          {takeItems}
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{marginBottom: 12, fontSize:20,}}>合計金額:{finalResult}円</Text>
      </View>
        <View>
          <Pressable
            style={styles.button}
            // onPress={onSave}
          >
            <Text 
            style={{ fontWeight: "bold", paddingHorizontal:10, color:'white', }}
            // onPress={()=>navigation.navigate('Result')}
            // onPress={onSave}
            >注文確認</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  countContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color:'white',
    width:'90%',
    backgroundColor: 'royalblue',
    padding:5,
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    fontSize: 12,
    backgroundColor: 'royalblue',
    borderRadius: 8,
    // borderWidth: 2,
    textAlign: 'center',
    alignItems:'center',
    // color: "white",
    padding: 5,
  },
  calcButton: {
    width:45,
    height:45,
    fontSize:24,
    borderRadius:4,
    justifyContent:'center',
    textAlign:'center',
    backgroundColor: 'lightgray',
    padding:8,
    marginRight:12,
  }
});
