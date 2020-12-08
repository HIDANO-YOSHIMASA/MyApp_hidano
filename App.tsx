import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import MenuScreen from './src/MenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"ホーム画面"}}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{title:"メニュー画面"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

