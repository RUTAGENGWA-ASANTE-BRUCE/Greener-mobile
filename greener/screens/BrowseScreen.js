import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView,TextInput } from 'react-native';
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements" 
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from "react"
import {useNavigation} from "@react-navigation/native"
export default function BrowseScreen() {
    const navigator=useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow pt-5 px-5  `} >
    <View style={tw``}>

    <TouchableOpacity style={tw`absolute z-50 top-7 `} onPress={()=>navigator.navigate("HomeScreen")}>
      <Icon type="ionicon" name='arrow-back-outline' color="gray" style={tw`bg-white`}/>
    </TouchableOpacity>

    <View style={tw` flex-row mt-20 justify-between w-full`}>
    <Text style={tw`text-2xl mt-2  font-semibold`}>Browse</Text>
    <Image style={tw`h-14 rounded-full w-14`} source={require("../public/avatar9.jpg")} />
    </View>
    </View>

    </SafeAreaView>
  );
}

