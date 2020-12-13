import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import MenuScreen from './src/MenuScreen';
import OrderScreen from './src/OrderScreen';
import ResultScreen from './src/ResultPage';
import FoodScreen from './src/FoodScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Home"}}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{title:"Menu"}}/>
        <Stack.Screen name="Order" component={OrderScreen} options={{title:"Order"}}/>
        <Stack.Screen name="Result" component={ResultScreen} options={{title:"OrderList"}}/>
        <Stack.Screen name="Food" component={FoodScreen} options={{title:"FoodMenu"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

