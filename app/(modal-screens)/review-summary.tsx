import CustomButton from "@/components/shared/customButton";
import { Feather, FontAwesome } from "@expo/vector-icons";
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

const ReviewSummary = () => {
  return (
    <>
      {/* Top-only Safe Area */}
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />
      <ScrollView className="flex-1 bg-white dark:bg-black px-4">
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
            />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-black dark:text-white">
            Review Summary
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
        </View>

        {/* Summary Card */}
        <View className="border border-dashed border-gray-300 rounded-2xl p-4 mb-6">
          {/* Service Info */}
          <View className="flex-row mb-4">
            <Image
              source={{
                uri: "https://img.freepik.com/premium-photo/beautiful-woman-smiles-when-washing-dishes-home_353017-2818.jpg?ga=GA1.1.1622344078.1749644231&semt=ais_hybrid&w=740",
              }}
              className="w-20 h-20 rounded-lg mr-4"
            />
            <View className="flex-1 justify-center">
              <View className="flex-row justify-between items-center">
                <Text className="text-base font-poppinsSemiBold dark:text-white">
                  Home Cleaning
                </Text>
                <View className="flex-row items-center">
                  <FontAwesome size={14} name="star" color={'orange'} />
                  <Text className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                    4.5
                  </Text>
                </View>
              </View>
              <Text className="text-sm font-poppinsLight text-gray-500 dark:text-gray-500">
                Robert Kelvin
              </Text>
              <Text className="text-sm font-poppinsSemiBold mt-3">
                $1,600 / <Text className="font-poppinsLight text-gray-500">hour</Text>
              </Text>
            </View>
          </View>

          {/* Booking Details */}
          <View className="space-y-4">
            <View className="border-t border-b border-gray-300 py-3">
              <Item label="Service Name" value="Home Cleaning" />
              <Item label="Service Provider" value="Robert Kelvin" />
              <Item label="Booking Date" value="Wed, 18 Apr, 2025" />
              <Item label="Booking Time" value="09:00–12:00" />
              <Item label="Total Room" value="07" />
            </View>
            <Item label="Amount" value="4,800" />
            <Item label="Tax & Fee" value="1.25" />
            <Item label="Total Amount" value="4,801.25" isBold />
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-500 dark:text-gray-400">
                Payment Method
              </Text>
              <View className="bg-lightGreen px-3 py-1 rounded-full">
                <Text className="text-primaryColor font-medium">Cash</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Pay Now Button */}
        <CustomButton
            title="Pay Now"
            buttonStyle="bg-primaryColor rounded-full h-14"
            textStyle="text-white text-lg font-semibold"
            onPress={() => {
                router.push("/e-receipt")
            }}
          />
      </ScrollView>
    </>
  );
};

const Item = ({
  label,
  value,
  isBold = false,
}: {
  label: string;
  value: string;
  isBold?: boolean;
}) => (
  <View className="flex-row justify-between py-3">
    <Text className="text-gray-500 dark:text-gray-400 font-poppinsLight">
      {label}
    </Text>
    <Text
      className={`text-right font-poppinsSemiBold ${
        isBold
          ? "font-semibold text-black dark:text-white"
          : "text-gray-700 dark:text-gray-200"
      }`}
    >
      {value}
    </Text>
  </View>
);

export default ReviewSummary;
