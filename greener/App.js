import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import BrowseScreen from "./screens/BrowseScreen"
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
    <SafeAreaProvider>
      
        <Stack.Navigator>
          <Stack.Screen component={HomeScreen} name="HomeScreen" options={{headerShown:false}}/>
          <Stack.Screen component={LoginScreen} name="LoginScreen" options={{headerShown:false}} />
          <Stack.Screen component={BrowseScreen} name="BrowseScreen" options={{headerShown:false}} />
        </Stack.Navigator>
    </SafeAreaProvider>
      </NavigationContainer>
  );
}

