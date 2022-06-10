import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen/>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

