import { favouritesCategories } from "@/constants/favourites";
import { popularAgencies } from "@/constants/popular-handyman";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PopularAgencies = () => {
  const [bookingStage, setBookingStage] = useState("All");

  return (
    <>
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />
      <View className="flex-1 bg-white">
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
          Popular Agencies
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
        </View>

        {/* Tabs */}

        <View className="flex-row justify-around mb-4 border-b border-gray-300 ml-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favouritesCategories.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setBookingStage(item);
                }}
                className={`h-10 justify-center px-4 mr-4 items-center ${
                  bookingStage === item ? "border-b-2 border-primaryColor" : ""
                }`}
              >
                <Text
                  className={`mb-2 ${
                    bookingStage === item
                      ? "text-primaryColor font-poppinsSemiBold"
                      : "text-gray-900 font-poppinsRegular"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Favourites Grid */}
        <ScrollView>
          <View className="flex-row flex-wrap justify-between px-4">
            {popularAgencies.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="w-[48%] h-64 bg-lightBlue rounded-xl mb-4"
                onPress={() => router.push("/booking-form")}
              >
                <View className="px-2">
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-40 rounded-xl"
                    resizeMode="cover"
                  />
                </View>
                <View className="p-2">
                  <View className="flex-row justify-between items-center">
                    <Text className="font-semibold text-xs font-poppinsSemiBold">{item.title}</Text>
                    <View className="flex-row">
                      <StyledComponent
                        component={Ionicons}
                        name="star"
                        className="text-orange-500 dark:text-white mr-1"
                        size={14}
                      />
                      <Text className="text-orange-500 text-[10px] font-poppinsLight">
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-gray-500 text-[12px] mt-1 font-poppinsLight">{item.name}</Text>
                  <View className="flex-row justify-between items-center mt-4">
                    <Text className="font-semibold text-sm font-poppinsSemiBold">{item.price}<Text className="text-gray-500 text-xs font-poppinsLight">/hour</Text></Text>
                  
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PopularAgencies;
