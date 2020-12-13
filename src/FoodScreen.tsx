import React, {useRef} from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Button,
  Animated,
  Platform,
  useWindowDimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import pic00 from '../assets/steak.jpg';
import pic01 from '../assets/hamburger.jpg';
import pic02 from '../assets/chickenWings.jpg';
import pic03 from '../assets/sandwich.jpg';
import pic04 from '../assets/saladRoll.jpg';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Food'>;
};



export const images: MenuInfo[] = [
  {
    pic: pic00,
    title: "ステーキ",
    text:
      "ステーキ（英: steak）は、牛の上質な部位の精肉で、筋繊維の走行に対して垂直にカットされた比較的厚切りの肉片。日本においては、その肉を使った料理や調理法を意味する",
    price: 1800,
    createdAt: 3243242,
  },
  {
    pic: pic01,
    title: "ハンバーガー",
    text:
      "第二次世界大戦後に佐世保（長崎県）に駐留した米軍を通じて、本格的に日本にハンバーガーが持ち込まれたとされている。",
    price: 1200,
    createdAt: 3243242,
  },
  {
    pic: pic02,
    title: "チキンウイング",
    text:
      "鶏はもっとも代表的な家禽であり、単に鳥肉といえば鶏肉を指すことが多い。牛肉、豚肉、羊肉と並んで世界で日常的に食用にされる肉のひとつである。",
    price: 1280,
    createdAt: 3243242,
  },
  {
    pic: pic03,
    title: "サンドウィイッチ",
    text:
      "サンドイッチ、サンドウィッチ（英語: sandwich）とは、パンなどに肉や野菜、卵等の具を挟んだり、乗せたりした料理のこと。",
    price: 780,
    createdAt: 3243242,
  },
  {
    pic: pic04,
    title: "サラダ",
    text:
      "サラダ（英語: Salad ）とは、野菜などの具材に塩、酢、油、香辛料などの調味料をふりかけるか、和えて盛りつけた料理の総称。",
    price: 680,
    createdAt: 3243242,
  },
];

export default function FoodScreen({ navigation }: Props) {

const scrollX = useRef(new Animated.Value(0)).current;

const toOrder = (menuInfo: MenuInfo) => {
  navigation.navigate("Order", {menuInfo: menuInfo});
};

const { width: windowWidth } = useWindowDimensions();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View style={{ width: windowWidth }} key={imageIndex}>
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>{image.title}</Text>
                </View>
                {/* <View style={{flex: 0.4}}></View> */}
                <Pressable
                  style={{ alignItems: "center" }}
                  onPress={() => {
                    toOrder(image);
                  }}
                >
                  <Image
                    source={image.pic}
                    style={{
                      width: 300,
                      height: 300,
                      resizeMode: "contain",
                      marginVertical: 12,
                    }}
                  />
                </Pressable>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text
                    style={{
                      color: 'dimgray',
                      width: "80%",
                      textAlign: "center",
                      marginVertical: 12,
                    }}
                  >
                    {image.text}
                  </Text>
                  <Text style={{ fontSize: 24, color:'dimgray' }}>￥{image.price}円</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    // backgroundColor: 'beige',
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  scrollContainer: {
    flex:8,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    width:500,
    height: 450,
    resizeMode:'contain',
    marginBottom: 8,
    marginTop: 5,
    // marginHorizontal: 16,
    borderRadius: 5,
    alignItems:'center',
    overflow: "hidden",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "dimgray",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "royalblue",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flex:0.5,
    paddingTop:45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewStyle: {

  }
});
