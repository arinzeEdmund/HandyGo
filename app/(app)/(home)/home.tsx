import CustomNavbar from "@/components/shared/customNavbar";
import { Categories } from "@/constants/categories";
import { Companies } from "@/constants/companies";
import { Services } from "@/constants/services";
import {
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView className={"flex-1 bg-white dark:bg-darkModeBgColor"}>
      {/* Navigation Bar */}
      <View className="py-2 px-4 justify-center">
        <CustomNavbar
          goBack={() => router.push("/(app)/(profile)/profile")}
          left_icon={
            <View className="justify-center items-center flex-row">
              <TouchableOpacity className="w-10 h-10 rounded-full">
                <Image
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_1280.jpg",
                  }}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", borderRadius: 100 }}
                />
              </TouchableOpacity>
              <View className="ml-3">
                <Text className="font-poppinsLight dark:text-white text-[12px]">
                  Arinze Edmund
                </Text>
                <Text className="font-poppinsSemiBold text-xs text-gray-900 dark:text-white">
                  London, UK
                </Text>
              </View>
            </View>
          }
          nav_icons={
            <TouchableOpacity
              onPress={() => {}}
              className="justify-center relative items-center bg-lightBlue w-10 h-10 rounded-full justify-center items-center rounded-full flex-row"
            >
              <View className=" flex  rounded-full justify-center items-center h-2 w-2 bg-red-500 z-10  absolute top-3 right-3 "></View>
              <View className="">
                <StyledComponent
                  component={Fontisto}
                  name="bell"
                  className="text-black dark:text-white"
                  size={14}
                />
              </View>
            </TouchableOpacity>
          }
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="w-full h-14 mt-3 mb-3 px-4">
          <TouchableOpacity className="flex-row w-full h-full bg-lightBlue rounded-lg justify-between items-center px-2">
            <StyledComponent
              component={EvilIcons}
              name={"search"}
              className="text-gray-500 dark:text-white"
              size={24}
              onPress={() => {}}
            />
            <TextInput
              placeholder="Search..."
              placeholderTextColor={""}
              className="w-[84%] h-full"
            />
            <StyledComponent
              component={FontAwesome}
              name={"sliders"}
              className="text-gray-400 dark:text-white mr-2"
              size={20}
              onPress={() => router.push("/filter-screen")}
            />
          </TouchableOpacity>
        </View>

        {/* Special Offer */}
        <View className="px-4">
          <Text className="font-bold text-lg mb-2">Special Offer</Text>
          <View className="bg-primaryColor rounded-xl flex-row items-center h-40">
            <View className="flex-1">
              <Text className="text-white text-[50px] font-bold ml-6 font-poppinsBold">
                40%
              </Text>
              <Text className="text-white text-sm ml-6 font-poppinsSemiBold">
                Todays Special Offer
              </Text>
              <Text className="text-white text-[10px] mt-1 ml-6 font-poppinsRegular">
                Get discount for every order, only valid for today
              </Text>
            </View>
            <Image
              source={require("../../../assets/images/carpenter.png")}
              className="w-[50%] h-[100%] rounded-xl"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Pagination Indicator */}
        <View className="flex-row justify-center my-4">
          <View className="w-2 h-2 bg-green-500 rounded-full mx-1" />
          <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
          <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
        </View>

        {/* Categories */}
        <Text className="font-bold text-lg mb-3 ml-4">Categories</Text>
        <View className="flex-row justify-between mb-6 px-8">
          {Categories.map((item, index) => (
            <View key={index} className="items-center">
              <View className="bg-lightGreen p-4 rounded-full mb-1">
                <StyledComponent
                  component={FontAwesome5}
                  name={item.icon as any}
                  className="text-primaryColor"
                  size={20}
                  onPress={() => {}}
                />
              </View>
              <Text className="text-xs text-black">{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Popular Services */}
        <View className="flex-row justify-between items-center mb-3 px-4">
          <Text className="font-bold text-lg">Popular Services</Text>
          <Text className="text-primaryColor text-sm">View All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="ml-4"
        >
          {Services.map((service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push("/(modal-screens)/category-details");
              }}
            >
              <Image
                source={{ uri: service.img }}
                className="w-40 h-40 rounded-lg mr-4"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Services */}
        <View className="flex-row justify-between items-center mb-3 mt-8 px-4">
          <Text className="font-bold text-lg">Popular Agencies</Text>
          <Text className="text-primaryColor text-sm">View All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="ml-4"
        >
          {Companies.map((service, index) => (
            <Image
              key={index}
              source={{ uri: service.img }}
              className="w-40 h-40 rounded-lg mr-4"
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
