import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Platform, TouchableOpacity} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import logo from "../assets/sparta.jpg";
import Pic01 from "../assets/hamburger.jpg";
import Carousel, { Pagination } from "react-native-snap-carousel";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeScreen({navigation}: Props) {

 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text} >
          Perfect Order
        </Text>
      </View>

      <ImageBackground source={Pic01} style={styles.backgroundImage} />
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.menuButton}>go to Menu!!</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.bottomContainer}>
        <Text style={styles.buttons} onPress={()=>null}>Sign in</Text>
        <Text style={styles.buttons} onPress={()=>null}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
  text: {
    fontSize: 12,
    letterSpacing: 2,
    color: "white",
    marginBottom: 20,
  },
  topContainer: {
    // flex: 1,
    // flexDirection: "row",
    justifyContent: "space-around",
  },
  backgroundImage: {
    flex: 4,
    width: 500,
    height: 620,
    resizeMode: "contain",
    marginBottom: 10,
  },
  menuButton: {
    borderColor: 'white',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    color: 'white',
    textAlign: 'center',
    padding: 6,
    marginVertical: 25,
  },
  buttons: {
    width: 120,
    height: 30,
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 6,
    textAlign: 'center',
    marginRight: 8
    
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomButton: {
    width: 34,
  },
});
