import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames"
export default function HomeScreen() {
  return (
    <View >
      <Text style={tw`mt-10 font-bold text-2xl mx-auto`}>Your Home.
      <Text style={tw`mt-10 font-bold text-2xl  text-green-500`}>Greener.</Text>
      </Text>
      <Text style={tw`mx-auto text-gray-400`}>Ejoy the experience</Text>
      
    </View>
  );
}

