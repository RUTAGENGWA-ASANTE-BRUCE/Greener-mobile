import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigator = useNavigation();
  return (
    <View style={tw`bg-gray-100 h-full  `}>
      <Text style={tw`mt-10 font-bold text-2xl mx-auto`}>
        Your Home.
        <Text style={tw`mt-10 font-bold text-2xl  text-green-500`}>
          Greener.
        </Text>
      </Text>
      <Text style={tw`mx-auto text-gray-400`}>Ejoy the experience</Text>
      <Image
        style={tw`w-full h-96 mt-6`}
        source={require("../public/homePhoto.jpg")}
      />
      <TouchableOpacity
        style={tw`mt-5   rounded-lg mx-auto`}
        onPress={() => navigator.navigate("LoginScreen")}
      >
        <LinearGradient
          colors={["#09db9f", "#48e0b5", "#1bcc9a"]}
          start={[0, 1]}
          end={[1, 0]}
          style={tw`rounded-md w-72 py-2.5 `}
        >
          <Text style={tw`text-center text-lg font-semibold text-white `}>
            Login
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`rounded-md  mx-auto mt-5  w-72  py-2.5 bg-white`}
        onPress={() => navigator.navigate("SignupScreen")}
      >
        <Text style={tw`text-center text-lg font-semibold text-black`}>
          Signup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`mt-4`}>
        <Text style={tw`mx-auto text-gray-400`}>Terms of services</Text>
      </TouchableOpacity>
    </View>
  );
}
