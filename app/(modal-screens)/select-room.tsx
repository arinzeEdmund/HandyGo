import CustomButton from "@/components/shared/customButton";
import { Entypo, Feather, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const SelectRoom = () => {
  return (
    <>
      {/* Top-only Safe Area */}
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />

      {/* Main container */}
      <View className="flex-1 bg-white dark:bg-darkModeBgColor relative">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          className="bg-white p-4"
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
              />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-black dark:text-white">
              Select Room
            </Text>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
          </View>

          {/* Room Selector */}
          <View className="flex-row h-14 bg-lightBlue px-4 rounded-xl justify-between items-center">
            <View className="h-14 bg-lightBlue flex-row items-center">
              <TouchableOpacity
                onPress={() => router.back()}
                className="w-10 h-10 rounded-full bg-lightGreen justify-center items-center"
              >
                <StyledComponent
                  component={FontAwesome6}
                  name="car-rear"
                  className="text-primaryColor dark:text-white"
                  size={20}
                />
              </TouchableOpacity>
              <Text className="text-sm font-poppinsSemiBold text-black dark:text-white ml-2">
                Select Room
              </Text>
            </View>
            <View className="h-14 bg-lightBlue flex-row items-center">
              <TouchableOpacity
                onPress={() => router.back()}
                className="w-5 h-5 rounded-full bg-lightGreen justify-center items-center mr-1"
              >
                <StyledComponent
                  component={Entypo}
                  name="minus"
                  className="text-black dark:text-white"
                  size={10}
                />
              </TouchableOpacity>
              <Text className="text-sm font-poppinsSemiBold text-black dark:text-white ml-2">
                1
              </Text>
              <TouchableOpacity
                onPress={() => router.back()}
                className="w-5 h-5 rounded-full bg-primaryColor justify-center items-center ml-3"
              >
                <StyledComponent
                  component={Entypo}
                  name="plus"
                  className="text-white dark:text-white"
                  size={10}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Floating Continue Button */}
        <View className="absolute bottom-4 left-4 right-4 mb-6">
          <CustomButton
            title="Continue"
            buttonStyle="bg-primaryColor rounded-full h-14"
            textStyle="text-white text-lg font-semibold"
            onPress={() => router.push("/select-address")}
          />
        </View>
      </View>
    </>
  );
};

export default SelectRoom;
