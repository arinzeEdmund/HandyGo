import CustomButton from "@/components/shared/customButton";
import { Entypo, EvilIcons, Feather, FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const FilterScreen = () => {
  const [minPrice] = useState(120);
  const [maxPrice] = useState(500);
  const [selectedRating] = useState(null);
  const [selectedCategory] = useState(null);

  const categories = [
    { label: "Cleaning", icon: "thumbs-up" },
    { label: "Repairing", icon: "wrench" },
    { label: "Painting", icon: "paint-brush" },
  ];

  const ratings = ["5.0", "4.0–4.9", "3.0–3.9", "2.0–2.9"];

  return (
    <>
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />

      <View className="flex-1 bg-white dark:bg-darkModeBgColor">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 bg-white px-4"
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center"
            >
              <StyledComponent
                component={Feather}
                name="arrow-left"
                className="text-black dark:text-white"
                size={20}
                onPress={() => router.back()}
              />
            </TouchableOpacity>
            <Text className="text-lg font-semibold">Filter</Text>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center"></TouchableOpacity>
          </View>

          {/* Location */}
          <Text className="font-bold text-lg mb-2">Location</Text>

          <View className="w-full h-14 mt-3 mb-3 ">
            <TouchableOpacity className="flex-row w-full h-full bg-lightBlue rounded-lg justify-between items-center px-2">
              <Text>London, UK</Text>
              <StyledComponent
                component={Entypo}
                name={"chevron-thin-down"}
                className="text-gray-400 dark:text-white mr-2"
                size={14}
                onPress={() => router.push("/filter-screen")}
              />
            </TouchableOpacity>
          </View>

          {/* Category */}
          <Text className="font-bold text-lg mb-2">Category</Text>

          <View className="flex-row gap-3 mb-4">
            {categories.map((cat, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-1 justify-between p-3 h-28 bg-lightBlue rounded-xl ${
                  selectedCategory === cat.label
                    ? "bg-green-100"
                    : "bg-lightBlue"
                }`}
              >
                <View className="w-10 h-10 bg-lightGreen rounded-lg justify-center items-center">
                  <StyledComponent
                    component={FontAwesome}
                    name={cat.icon as any}
                    className="text-primaryColor dark:text-white mr-2"
                    size={16}
                    onPress={() => router.push("/filter-screen")}
                  />
                </View>
                <Text className="text-black mt-1 font-poppinsLight">
                  {cat.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Price Range */}
          <Text className="text-base font-semibold text-black mb-2">
            Price Range
          </Text>
          <View className="flex-row h-14 mb-6 justify-between bg-lightBlue items-center rounded-lg">
            <View className="h-full w-[50%]">
              <Slider
                style={{ width: "100%", height: "100%", marginLeft: 6 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#55b535"
                thumbTintColor="#55b535"
              />
            </View>
            <View className="h-full  w-[50%] -scale-x-100">
              <Slider
                style={{ width: "100%", height: "100%", marginLeft: 6 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#55b535"
                thumbTintColor="#55b535"
              />
            </View>
          </View>
          <View className="flex-row justify-between mb-4">
            <View className="bg-lightBlue p-3 rounded-lg w-[48%]">
              <Text className="text-xs text-gray-500 mb-1 font-poppinsLight">
                Minimum Price
              </Text>
              <Text className="text-black text-sm font-poppinsSemiBold">
                ${minPrice.toFixed(2)}
              </Text>
            </View>
            <View className="bg-lightBlue p-3 rounded-lg w-[48%]">
              <Text className="text-xs text-gray-500 mb-1 font-poppinsLight">
                Maximum Price
              </Text>
              <Text className="text-black text-sm font-poppinsSemiBold">
                ${maxPrice.toFixed(2)}
              </Text>
            </View>
          </View>

          <Text className="font-bold text-lg mb-2">Available Date</Text>

          <View className="w-full h-14 mt-3 mb-3 ">
            <TouchableOpacity className="flex-row w-full h-full bg-lightBlue rounded-lg justify-between items-center px-2">
              <Text>Wed, 18 Apr, 2025</Text>
              <StyledComponent
                component={EvilIcons}
                name={"calendar"}
                className="text-gray-400 dark:text-white mr-2"
                size={24}
                onPress={() => router.push("/filter-screen")}
              />
            </TouchableOpacity>
          </View>

          {/* Ratings */}
          <Text className="font-bold text-lg mb-2">Ratings</Text>

          <View className="flex-row flex-wrap gap-2 mb-6">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="ml-4"
            >
              {ratings.map((rate, index) => (
                <TouchableOpacity
                  key={index}
                  className={`flex-row items-center gap-1 px-3 py-2 mr-3 rounded-lg ${
                    selectedRating === rate ? "bg-yellow-100" : "bg-lightBlue"
                  }`}
                >
                  <FontAwesome name="star" size={16} color="gold" />
                  <Text className="text-black">{rate}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-between">
            <CustomButton
              title="Reset"
              buttonStyle="bg-lightGreen w-[46%] rounded-full h-12"
              textStyle="text-gray-900 font-semibold"
              onPress={() => {}}
            />
            <CustomButton
              title="Apply"
              buttonStyle="bg-primaryColor w-[46%] rounded-full h-12"
              textStyle="text-white font-semibold"
              onPress={() => {
                router.push("/booking-form");
              }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default FilterScreen;
