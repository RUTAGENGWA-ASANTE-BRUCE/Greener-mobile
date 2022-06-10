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
    <SafeAreaView style={tw`bg-white flex-grow pt-5   `}>
      <View style={tw``}>
        <View style={tw`mx-5`}>
          <TouchableOpacity
            style={tw`absolute z-50 top-7 `}
            onPress={() => navigator.navigate("ExploreScreen")}
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
        <Image
          source={require("../public/plantOnTable.jpg")}
          style={{
            height: 300,
            width: 430,
            resizeMode: "contain",
            marginTop: 40,
          }}
        />
        <View style={tw`mx-5 `}>
          <Text style={tw`text-xl font-semibold`}>
            16 Best Plants That Thrive In Your BedRoom
          </Text>
        </View>
        <View style={tw`flex flex-row mt-3 mx-3`}>
          <TouchableOpacity
            style={tw`w-20 h-7 border-gray-400 border rounded-xl`}
            onPress={() => navigator.navigate("SettingsScreen")}
          >
            <Text style={tw`m-auto text-gray-500`}>Interior</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-20 h-7 border-gray-400 border rounded-xl ml-5`}
          >
            <Text style={tw`m-auto text-gray-500`}>27 m</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-20 h-7 border-gray-400 border rounded-xl ml-5`}
          >
            <Text style={tw`m-auto text-gray-500`}>Ideas</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={tw`text-gray-500 mt-3 text-sm mx-3 border-b border-gray-300 pb-4`}
        >
          Bedrooms deserve to be decorated with lush greenery just like everey
          other room in the house - but it can be tricky to find a plant that
          thrives here. Low light, high humidity and warm temperatures mean only
          certain houseplants will flourish.
        </Text>
        <Text style={tw`font-semibold mt-3 mx-3`}>Gallery</Text>
        <View style={tw` w-full justify-between flex flex-row mt-2 px-3`}>
          <Image
            source={require("../public/tablePlants1.jpg")}
            style={tw`h-40 w-28 rounded-md`}
          />
          <Image
            source={require("../public/tablePlants2.jpg")}
            style={tw`h-40 w-28 rounded-md`}
          />
          <Image
            source={require("../public/tablePlant3.jpg")}
            style={tw`h-40 w-28 rounded-md`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
