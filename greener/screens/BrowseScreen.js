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
export default function BrowseScreen() {
  const [selectedHeading, setSelectedHeading] = useState(headings[0]);
  const navigator = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow pt-5 px-5  bg-gray-100`}>
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

        <View style={tw` flex-row mt-20 justify-between w-full`}>
          <Text style={tw`text-2xl mt-2  font-semibold`}>Browse</Text>
          <Image
            style={tw`h-14 rounded-full w-14`}
            source={require("../public/avatar9.jpg")}
          />
        </View>
      </View>
      <View style={tw`mt-5 border-b-2 border-gray-300`}>
        <FlatList
          data={headings}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title }, item }) => (
            <TouchableOpacity onPress={() => setSelectedHeading(item)}>
              <Text
                style={tw`pb-3 mr-5 ${
                  selectedHeading?.id === id
                    ? "border-b-4  border-green-500 text-green-500"
                    : "text-gray-400"
                } font-semibold text-lg`}
              >
                {title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={tw`mt-5 `}>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, icon, productsNumber } }) => (
            <TouchableOpacity
              onPress={() => navigator.navigate("ExploreScreen")}
            >
              <View style={tw`w-40 h-32  mb-6 mr-12 rounded-md bg-white`}>
                <Image
                  source={icon}
                  style={tw`rounded-full mt-5 mx-auto h-12 w-12 `}
                />
                <Text style={tw`text-lg font-semibold mt-0.5 mx-auto`}>
                  {title}
                </Text>
                <Text style={tw`text-gray-400 mt-0.5 mx-auto`}>
                  {productsNumber} products
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
