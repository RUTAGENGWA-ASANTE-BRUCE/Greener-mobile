import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import plantsIcon from "../public/icons8-plant-58.png";
import seedsIcon from "../public/icons8-seeds-64.png";
// import * as Progress from 'react-native-progress';
import flowersIcon from "../public/icons8-flowers-64.png";
import sprayersIcon from "../public/icons8-sprayer-64.png";
import potsIcon from "../public/icons8-plant-pot-64.png";
import fertilizersIcon from "../public/icons8-fertilizer-64.png";
const categories = [
  {
    id: 123,
    title: "Plants",
    icon: plantsIcon,
    productsNumber: 147,
  },
  {
    id: 4113,
    title: "Seeds",
    icon: seedsIcon,
    productsNumber: 16,
  },
  {
    id: 411,
    title: "Flowers",
    icon: flowersIcon,
    productsNumber: 68,
  },
  {
    id: 422,
    title: "Sprayers",
    icon: sprayersIcon,
    productsNumber: 17,
  },
  {
    id: 55236,
    title: "Pots",
    icon: potsIcon,
    productsNumber: 68,
  },
  {
    id: 2522,
    title: "Fertilizers",
    icon: fertilizersIcon,
    productsNumber: 9,
  },
];

const headings = [
  {
    id: 192,
    title: "Products",
  },
  {
    id: 585,
    title: "Inspirations",
  },
  {
    id: 742,
    title: "Products",
  },
];
export default function SettingsScreen() {
  const [selectedHeading, setSelectedHeading] = useState(headings[0]);
  const navigator = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow pt-5 px-5 `}>
      <View style={tw``}>
        <TouchableOpacity
          style={tw`absolute z-50 top-7 `}
          onPress={() => navigator.navigate("DescribeScreen")}
        >
          <Icon
            type="ionicon"
            name="arrow-back-outline"
            color="gray"
            style={tw`bg-white`}
          />
        </TouchableOpacity>
        <View style={tw` flex-row mt-20 justify-between w-full`}>
          <Text style={tw`text-2xl mt-2  font-semibold`}>Settings</Text>
          <Image
            style={tw`h-14 rounded-full w-14`}
            source={require("../public/avatar9.jpg")}
          />
        </View>
        <View style={tw`border-b border-gray-300 pb-5`}>
        <Text style={tw`mt-5 text-base text-gray-400`}>Username</Text>
        <View style={tw`mt-5 flex flex-row justify-between`}>
          <Text style={tw` text-base text-black`}>Paul</Text>
          <TouchableOpacity onPress={() => navigator.navigate("ExploreScreen")}>
            <Text style={tw`mt-5 text-base text-green-500`}>Edit</Text>
          </TouchableOpacity>
        </View>
          <Text style={tw`mt-3 text-base text-gray-400`}>Location</Text>
        <View style={tw`mt-3 flex flex-row justify-between`}>

          <Text style={tw`mt-3 text-base text-black`}>Milan</Text>
          <TouchableOpacity
            onPress={() => navigator.navigate("DescribeScreen")}
          >
            <Text style={tw`mt-5 text-base text-green-500`}>Edit</Text>
          </TouchableOpacity>
        </View>
          <Text style={tw`mt-3 text-base text-black`}>
            paul.jamesspn@gmail.com
          </Text>
          </View>
          <Text style={tw`mt-5 text-base text-gray-400`}>Budget</Text>
            
            {/* <Progress.Bar progress={0.3} width={200} /> */}
        <View style={tw`mt-2 flex flex-row justify-between`}>
            <Text style={tw`text-gray-400 text-base`}>Notifications</Text>
            <LinearGradient
            colors={["#09db9f", "#48e0b5", "#1bcc9a"]}
            start={[0, 1]}
            end={[1, 0]}
            style={tw`rounded-3xl w-24 h-10 p-1 `}
          >
            <View style={tw`w-8 h-8 bg-white rounded-full`}/>
          </LinearGradient>
        </View>
        <View style={tw`mt-7 flex flex-row justify-between`}>
            <Text style={tw`text-gray-400 text-base`}>Newsletter</Text>
            <LinearGradient
            colors={["#798391", "#798391",]}
            start={[0, 1]}
            end={[1, 0]}
            style={tw`rounded-3xl w-24 h-10 p-1 `}
          >
            <View style={tw`w-8 h-8 bg-white rounded-full`}/>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
}
