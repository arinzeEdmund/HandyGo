import CustomButton from "@/components/shared/customButton";
import CustomInput from "@/components/shared/customInput";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const AddCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {/* Top-only Safe Area */}
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />

      {/* Main content */}
      <View className="flex-1 bg-white dark:bg-darkModeBgColor">
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
              Add Card
            </Text>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
          </View>

          {/* Card Preview */}
          <View className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-6 mb-6 h-48">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-lg tracking-widest">
                3659 **** **** 6971
              </Text>
              <View className="flex-row items-center justify-center">
                <View className="w-16 h-16 bg-red-500 rounded-full" />
                <View className="w-16 h-16 bg-orange-400 rounded-full -ml-8 z-10" />
              </View>
            </View>
            <View className="flex-row justify-between mt-6">
              <View>
                <Text className="text-sm text-gray-400">Card Holder Name</Text>
                <Text className="text-white font-semibold">John Leam</Text>
              </View>
              <View>
                <Text className="text-sm text-gray-400">Expiry Date</Text>
                <Text className="text-white font-semibold">30/03/27</Text>
              </View>
            </View>
          </View>

          {/* Card Holder Name */}
          <View className="mt-2">
            <CustomInput
              placeholder="Enter name"
              label="Card Holder Name"
              inputMode="email"
              value=""
              onChangeText={() => {}}
              onBlur={() => {}}
              error=""
            />
          </View>

          {/* Card Number */}
          <View className="mt-2">
            <CustomInput
              placeholder="Enter card number"
              label="Card Number"
              inputMode="email"
              value=""
              onChangeText={() => {}}
              onBlur={() => {}}
              error=""
            />
          </View>

          {/* Expiry Date & CVV */}
          <View className="flex-row space-x-4 mb-4">
            <View className="flex-1">
              <CustomInput
                placeholder="Select date"
                label="Expiry Date"
                inputMode="email"
                value=""
                onChangeText={() => {}}
                onBlur={() => {}}
                error=""
              />
            </View>
            <View className="flex-1">
              <CustomInput
                placeholder="Enter CVV"
                label="CVV"
                inputMode="email"
                value=""
                onChangeText={() => {}}
                onBlur={() => {}}
                error=""
              />
            </View>
          </View>

          {/* Terms & Conditions */}
          <View className="flex-row items-center mb-6">
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              className="mr-2"
            >
              <View
                className={`w-5 h-5 rounded-md border-2 ${
                  isChecked
                    ? "bg-green-500 border-green-500"
                    : "border-primaryColor"
                }`}
              />
            </TouchableOpacity>
            <Text className="text-sm text-primaryColor font-poppinsLight dark:text-white">
              I agree to the{" "}
              <Text className="text-green-600 font-poppinsSemiBold underline">
                Terms and Conditions
              </Text>
            </Text>
          </View>

          {/* Add Card Button */}
          <CustomButton
            title="Add Card"
            buttonStyle="bg-primaryColor rounded-full h-14"
            textStyle="text-white text-lg font-semibold"
            onPress={() => {
                router.push("/review-summary")
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default AddCard;
