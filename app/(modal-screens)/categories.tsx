import { AllCategories } from "@/constants/categories";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Categories = () => {
  return (
    <>
      {/* Top-only Safe Area */}
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4 px-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center"
        >
          <StyledComponent
            component={Feather}
            name="arrow-left"
            className="text-black dark:text-white"
            size={20}
          />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-black dark:text-white">
          Categories
        </Text>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
      </View>
      {/* Main content */}
      <View className="flex-1 bg-white dark:bg-darkModeBgColor">
        <ScrollView className="flex-1 bg-white dark:bg-black px-4">
          {/* Categories */}

          <View className="flex-row flex-wrap justify-between px-1 mb-4">
            {AllCategories.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => router.push("/booking-form")}
                className="items-center w-[23%] mb-4"
              >
                <View className="bg-lightGreen p-4 rounded-full mb-2">
                  <StyledComponent
                    component={FontAwesome5}
                    name={item.icon}
                    className="text-primaryColor"
                    size={20}
                  />
                </View>
                <Text className="text-xs text-center text-black leading-tight">
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Categories;
