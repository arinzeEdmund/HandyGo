import CustomNavbar from "@/components/shared/customNavbar";
import { Feather, FontAwesome6, Fontisto } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView className={"flex-1 bg-white dark:bg-darkModeBgColor"}>
      {/* Navigation Bar */}
      <View className="px-4 mt-4">
        <CustomNavbar
          goBack={() => router.push("/(app)/(profile)/profile")}
          left_icon={
            <View className="justify-center items-center flex-row">
              <TouchableOpacity className="w-8 h-8 rounded-full ml-2">
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdHWaaj6kwpVT5Qi8IviDguyWqdEuBTWWKg&s",
                  }}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", borderRadius: 100 }}
                />
              </TouchableOpacity>
              <View className="ml-3">
                <Text className="font-poppinsSemiBold dark:text-white">
                  Welcome Arinzechukwu 👋
                </Text>
                <Text className="font-poppinsRegular text-xs text-gray-500 dark:text-white">
                  What will you like to do today
                </Text>
              </View>
            </View>
          }
          nav_icons={
            <TouchableOpacity
              onPress={() => {}}
              className="justify-center relative items-center flex-row"
            >
              <View className=" flex  rounded-full justify-center items-center h-4 w-4 bg-red-500 z-10  absolute -top-1 ">
                <Text className="text-[9px] font-poppinsSemiBold text-white ">
                  10
                </Text>
              </View>
              <View className="mr-2">
                <StyledComponent
                  component={Fontisto}
                  name="bell"
                  className="text-black dark:text-white"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          }
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Balance Card */}
        <View className="px-4">
          <View className="bg-primaryColor dark:bg-darkModeBgOffsetThree p-4 rounded-lg mb-4">
            <View className="flex-row justify-between">
              <View className="flex-row h-6 justify-center items-center">
                <Text className="text-white text-sm font-poppinsRegular">
                  Total Balance
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <StyledComponent
                    component={FontAwesome6}
                    name={"eye"}
                    className="text-white ml-3"
                    size={16}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {}}
                className={`flex-row px-2 items-center rounded-full`}
              >
                <Text className="text-white font-poppinsRegular">
                  {" "}
                  Transaction History
                </Text>
                <StyledComponent
                  component={Feather}
                  name="chevron-right"
                  className="text-white"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <Text className="text-white text-4xl font-poppinsBold mb-2 mt-4">
              $0.00
            </Text>

            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => {}}
                className="bg-white h-8 w-[48%] flex-row justify-center items-center rounded-full py-2 px-4"
              >
                <Text className="text-blue-600 font-poppinsSemiBold text-xs">
                  Pay
                </Text>
                <StyledComponent
                  component={Feather}
                  name="arrow-up-right"
                  className="text-primaryColor ml-1"
                  size={12}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                className="bg-white h-8 w-[48%] flex-row justify-center items-center rounded-full py-2 px-4"
              >
                <Text className="text-blue-600 font-poppinsSemiBold text-xs">
                  Receive
                </Text>
                <StyledComponent
                  component={Feather}
                  name="plus"
                  className="text-primaryColor ml-1"
                  size={12}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Crypto Assets */}
        <View className="flex-row justify-between items-center px-4 mb-4 mt-2">
          <Text className="text-lg mb-2 dark:text-white font-poppinsSemiBold">
            Crypto assets
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
