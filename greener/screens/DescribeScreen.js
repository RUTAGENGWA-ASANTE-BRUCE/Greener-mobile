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
export default function DescribeScreen() {
  const [secure, setSecure] = useState(true);
  const navigator = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow pt-5 px-5  `}>
      <View style={tw``}>
       <View>
       <TouchableOpacity
          style={tw`absolute z-50 top-7 `}
          onPress={() => navigator.navigate("BrowseScreen")}
        >
          <Icon
            type="ionicon"
            name="arrow-back-outline"
            color="gray"
            style={tw`bg-white`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`absolute z-50 top-7 right-1 `}
          onPress={() => navigator.navigate("HomeScreen")}
        >
          <Icon
            type="ionicon"
            name="ellipsis-horizontal"
            color="gray"
            style={tw`bg-white`}
          />
        </TouchableOpacity>
       </View>
       <Image source={require("../public/")}
      </View>
    </SafeAreaView>
  );
}
