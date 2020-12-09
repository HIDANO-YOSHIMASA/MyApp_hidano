import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground, Platform, Linking, TouchableHighlight, Image, Dimensions } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import logo from "../assets/sparta.jpg";
import Pic01 from "../assets/hamburger.jpg";
import Carousel, { Pagination } from "react-native-snap-carousel";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeScreen({navigation}: Props) {

const state = {
  data: [
    { title: "a", uri: "http://www.bluecode.jp/images/A.png" },
    { title: "b", uri: "http://www.bluecode.jp/images/B.png" },
    { title: "c", uri: "http://www.bluecode.jp/images/C.png" },
    { title: "d", uri: "http://www.bluecode.jp/images/D.png" },
    { title: "e", uri: "http://www.bluecode.jp/images/E.png" },
  ],
  activeSlide: 0,
};

const renderItem = ({ item, index }) => {
  return (
    <TouchableHighlight onPress={() => Linking.openURL(item.url)}>
      <Image
        source={{ uri: item.uri }}
        style={{ width: "100%", height: "100%" }}
      />
    </TouchableHighlight>
  );
};


  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.topContainer}>
    //     <Text style={{fontSize: 12, letterSpacing: 2, color: 'white', marginBottom: 20,}}>Contemporary Restaurant</Text>
    //   </View>

    //     <ImageBackground
    //       source={Pic01}
    //       style={styles.backgroundImage} />
    //     <Button style={styles.buttons} title="to Menu" onPress={() => navigation.navigate("Menu")} />

    //   <View style={styles.bottomContainer}>
    //     <Button title="ログイン" onPress={() => navigation.navigate("Menu")} />
    //     <Button title="新規登録" onPress={() => navigation.navigate("Menu")} />
    //   </View>
    // </SafeAreaView>

    <SafeAreaView style={{ height: 240 }}>
      <Carousel
        data={state.data}
        renderItem={renderItem}
        itemWidth={Dimensions.get("window").width * 0.6}
        sliderWidth={Dimensions.get("window").width * 1.0}
        // containerCustomStyle={{ flex: 1, backgroundColor: "#eee" }}
        onSnapToItem={(index) => setState({ activeSlide: index })} //for pagination
        loop
        autoplay
      />
      <Pagination
        dotsLength={state.data.length} //dotの数
        activeDotIndex={state.activeSlide} //どのdotをactiveにするか
        containerStyle={{ paddingVertical: 15 }} //デフォルトではちと広い
      />
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
