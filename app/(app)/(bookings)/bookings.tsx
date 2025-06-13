import CustomButton from "@/components/shared/customButton";
import {
  Cancelledbookings,
  Completedbookings,
  OngoingBookings,
} from "@/constants/bookings";
import { Feather } from "@expo/vector-icons";
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

const Booking = () => {
  const [bookingStage, setBookingStage] = useState("Ongoing");

  return (
    <>
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />
      <View className="flex-1 bg-white px-4">
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
            My Bookings
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
        </View>

        {/* Tabs */}
        <View className="flex-row justify-around mb-4 border-b border-gray-300">
          <TouchableOpacity
            onPress={() => {
              setBookingStage("Ongoing");
            }}
            className={`h-10 justify-center w-[33%] items-center ${
              bookingStage === "Ongoing"
                ? "border-b-2 mt-1 border-primaryColor"
                : ""
            }`}
          >
            <Text
              className={`mb-2 ${
                bookingStage === "Ongoing"
                  ? "text-primaryColor font-poppinsSemiBold"
                  : "text-gray-900 font-poppinsRegular"
              }`}
            >
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBookingStage("Completed");
            }}
            className={`h-10 justify-center w-[33%] items-center ${
              bookingStage === "Completed"
                ? "border-b-2 mt-1 border-primaryColor"
                : ""
            }`}
          >
            <Text
              className={`mb-2 ${
                bookingStage === "Completed"
                  ? "text-primaryColor font-poppinsSemiBold"
                  : "text-gray-900 font-poppinsRegular"
              }`}
            >
              Completed
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setBookingStage("Cancelled");
            }}
            className={`h-10 justify-center w-[33%] items-center ${
              bookingStage === "Cancelled"
                ? "border-b-2 mt-1 border-primaryColor"
                : ""
            }`}
          >
            <Text
              className={`mb-2 ${
                bookingStage === "Cancelled"
                  ? "text-primaryColor font-poppinsSemiBold"
                  : "text-gray-900 font-poppinsRegular"
              }`}
            >
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>

        {/* Booking List */}
        <ScrollView className="space-y-4">
          {bookingStage === "Ongoing" && (
            <>
              {OngoingBookings.map((item, index) => (
                <View key={index} className="bg-lightBlue rounded-xl p-4">
                  <View className="flex-row">
                    <Image
                      source={item.image}
                      className="w-16 h-16 rounded-md mr-4"
                    />
                    <View className="flex-1">
                      <Text className="text-sm font-poppinsSemiBold">
                        {item.title}
                      </Text>
                      <Text className="text-gray-500 font-poppinsLight">
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center mt-4">
                    <Text className="text-gray-900 mt-1 text-xs font-poppinsLight">
                      {item.date}
                    </Text>
                    <Text className="text-right font-poppinsSemiBold">
                      $1,600
                      <Text className="text-gray-900 text-xs font-poppinsLight">
                        /hour
                      </Text>
                    </Text>
                  </View>

                  {/* Buttons */}
                  <View className="flex-row justify-between px-4 mt-4 pt-4 mb-1 border-t border-gray-300">
                    <CustomButton
                      title="Cancel"
                      buttonStyle="bg-lightGreen w-[46%] rounded-full h-8"
                      textStyle="text-gray-900 font-poppinsSemiBold text-xs"
                      onPress={() => {}}
                    />
                    <CustomButton
                      title="E-receipt"
                      buttonStyle="bg-primaryColor w-[46%] rounded-full h-8"
                      textStyle="text-white font-poppinsSemiBold text-xs"
                      onPress={() => {
                        router.push("/booking-form");
                      }}
                    />
                  </View>
                </View>
              ))}
            </>
          )}

          {bookingStage === "Completed" && (
            <>
              {Completedbookings.map((item, index) => (
                <View key={index} className="bg-lightBlue rounded-xl p-4">
                  <View className="flex-row">
                    <Image
                      source={item.image}
                      className="w-16 h-16 rounded-md mr-4"
                    />
                    <View className="flex-1">
                      <Text className="text-sm font-poppinsSemiBold">
                        {item.title}
                      </Text>
                      <Text className="text-gray-500 font-poppinsLight">
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center mt-4">
                    <Text className="text-gray-900 mt-1 text-xs font-poppinsLight">
                      {item.date}
                    </Text>
                    <Text className="text-right font-poppinsSemiBold">
                      $1,600
                      <Text className="text-gray-900 text-xs font-poppinsLight">
                        /hour
                      </Text>
                    </Text>
                  </View>

                  {/* Buttons */}
                  <View className="flex-row justify-between px-4 mt-4 pt-4 mb-1 border-t border-gray-300">
                    <CustomButton
                      title="Leave Review"
                      buttonStyle="bg-lightGreen w-[46%] rounded-full h-8"
                      textStyle="text-gray-900 font-poppinsSemiBold text-xs"
                      onPress={() => {}}
                    />
                    <CustomButton
                      title="E-receipt"
                      buttonStyle="bg-primaryColor w-[46%] rounded-full h-8"
                      textStyle="text-white font-poppinsSemiBold text-xs"
                      onPress={() => {
                        router.push("/booking-form");
                      }}
                    />
                  </View>
                </View>
              ))}
            </>
          )}

          {bookingStage === "Cancelled" && (
            <>
              {Cancelledbookings.map((item, index) => (
                <View key={index} className="bg-lightBlue rounded-xl p-4">
                  <View className="flex-row">
                    <Image
                      source={item.image}
                      className="w-16 h-16 rounded-md mr-4"
                    />
                    <View className="flex-1">
                      <Text className="text-sm font-poppinsSemiBold">
                        {item.title}
                      </Text>
                      <Text className="text-gray-500 font-poppinsLight">
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center mt-4">
                    <Text className="text-gray-900 mt-1 text-xs font-poppinsLight">
                      {item.date}
                    </Text>
                    <Text className="text-right font-poppinsSemiBold">
                      $1,600
                      <Text className="text-gray-900 text-xs font-poppinsLight">
                        /hour
                      </Text>
                    </Text>
                  </View>

                  {/* Buttons */}
                  <View className="flex-row justify-between px-4 mt-4 pt-4 mb-1 border-t border-gray-300">
                    <CustomButton
                      title="Delete"
                      buttonStyle="bg-lightGreen w-[46%] rounded-full h-8"
                      textStyle="text-gray-900 font-poppinsSemiBold text-xs"
                      onPress={() => {}}
                    />
                    <CustomButton
                      title="Re-book"
                      buttonStyle="bg-primaryColor w-[46%] rounded-full h-8"
                      textStyle="text-white font-poppinsSemiBold text-xs"
                      onPress={() => {
                        router.push("/booking-form");
                      }}
                    />
                  </View>
                </View>
              ))}
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Booking;
