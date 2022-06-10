import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {
  const [secure, setSecure] = useState(true);
  const navigator = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow pt-5 px-5  `}>
      <View style={tw``}>
        <TouchableOpacity
          style={tw`absolute z-50 top-7 `}
          onPress={() => navigator.navigate("HomeScreen")}
        >
          <Icon
            type="ionicon"
            name="arrow-back-outline"
            color="gray"
            style={tw`bg-white`}
          />
        </TouchableOpacity>

        <Text style={tw`text-xl mt-20 font-semibold`}>Login</Text>
        <Text style={tw`text-gray-400 mt-5`}>Email</Text>
        <TextInput
          style={tw` w-full border-b-2 border-gray-200 h-12 p-1 mt-3 rounded-md `}
        />

        <Text style={tw`text-gray-400 mt-5`}>Password</Text>
        <TextInput
          style={tw` w-full border-b-2 border-gray-200 h-12 p-1 mt-3 rounded-md `}
          secure={secure}
        />
        {/* <Icon style={{ paddingRight: 15, }} name={secure ? "eye" : 'eye-slash'}size={20} color='gray' onPress={() => setSecure(!secure)} /> */}
        <TouchableOpacity
          style={tw`mt-8  rounded-lg `}
          onPress={() => navigator.navigate("BrowseScreen")}
        >
          <LinearGradient
            colors={["#09db9f", "#48e0b5", "#1bcc9a"]}
            start={[0, 1]}
            end={[1, 0]}
            style={tw`rounded-md w-full py-2.5 `}
          >
            <Text style={tw`text-center text-lg font-semibold text-white `}>
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={tw`mt-8`}>
          <Text style={tw` text-gray-400 text-center`}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
