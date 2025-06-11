import CustomButton from "@/components/shared/customButton";
import CustomInput from "@/components/shared/customInput";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const BookingForm = () => {
  return (
    <>
      {/* Top-only Safe Area */}
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />

      {/* Main content */}
      <View className="flex-1 bg-white dark:bg-darkModeBgColor">
        <ScrollView className="flex-1 bg-white p-4">
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
              Booking Form
            </Text>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
          </View>

          {/* Name Field */}
          <View className="mt-2">
            <CustomInput
              placeholder="Enter Name"
              label="Name"
              inputMode="email"
              value=""
              onChangeText={() => {}}
              onBlur={() => {}}
              error=""
            />
          </View>

          {/* Email Field */}
          <View className="mt-2">
            <CustomInput
              placeholder="Enter Email Address"
              label="Email Address"
              inputMode="email"
              value=""
              onChangeText={() => {}}
              onBlur={() => {}}
              error=""
            />
          </View>

          {/* Date Field */}
          <View className="mt-2">
            <CustomInput
              placeholder="Date"
              label="Select Date"
              inputMode="email"
              value=""
              onChangeText={() => {}}
              onBlur={() => {}}
              error=""
            />
          </View>

          {/* Time Field */}
          <View className="mt-2">
            <CustomInput
              placeholder="Time"
              label="Select Time"
              inputMode="email"
              value=""
              onChangeText={() => {}}
              onBlur={() => {}}
              error=""
            />
          </View>

          {/* Additional Note Field */}
          <Text className="text-base font-poppinsMedium text-black dark:text-white mb-2">
            Additional Note
          </Text>
          <TextInput
            placeholder="Add note"
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            className="bg-lightBlue h-32 text-gray-500 dark:text-white p-4 rounded-xl mb-8"
          />

          {/* Continue Button */}
          <CustomButton
            title="Continue"
            buttonStyle="bg-primaryColor rounded-full h-14"
            textStyle="text-white text-lg font-semibold"
            onPress={() => {
                router.push("/select-room")
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default BookingForm;
