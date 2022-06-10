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
export default function ExploreScreen() {
  const [secure, setSecure] = useState(true);
  const navigator = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow pt-5 px-5  `}>
      <View style={tw``}>
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

        <View style={tw` flex-row mt-20 justify-between w-full`}>
          <Text style={tw`text-2xl mt-1  font-semibold`}>Explore</Text>
          <View style={tw` w-48  h-10 rounded-md bg-gray-100 pl-2 flex flex-row`}>
              <TextInput style={tw` w-36 h-full  text-black `} placeholder="Search"/>
              <Icon color="gray" type="ionicon" style={tw`mt-2`} name="search-outline"/>
          </View>
        </View>
        <Image source={require("../public/niceHome.jpg")} style={{height:190,borderRadius:6,resizeMode:"contain",width:370,marginTop:50}}/>
        <View style={tw`flex flex-row mt-4`}>
        <Image source={require("../public/bedroomPlants.jpg")} style={tw`h-40 w-52 rounded-md`}/>
        <Image source={require("../public/homePlant.jpg")} style={tw`h-40 w-32 ml-8 rounded-md`}/>
        </View>
        <View style={tw`flex flex-row mt-4`}>
        <Image source={require("../public/plants1.jpg")} style={tw`h-40 w-40  rounded-md`}/>
        <Image source={require("../public/plants2.jpg")} style={tw`h-40 w-40 ml-12 rounded-md`}/>
        </View>
        <TouchableOpacity
          style={tw`absolute bottom-16 left-24  rounded-lg `}
          onPress={() => navigator.navigate("DescribeScreen")}
        >
          <LinearGradient
            colors={["#09db9f", "#48e0b5", "#1bcc9a"]}
            start={[0, 1]}
            end={[1, 0]}
            style={tw`rounded-md w-40 py-2.5 `}
          >
            <Text style={tw`text-center text-lg font-semibold text-white `}>
              Describe
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
