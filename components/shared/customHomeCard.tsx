import { EvilIcons } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CustomHomeCardProps = {
  cardState: boolean;
  onPress: () => void;
  title: string;
  cardDescription: string;
};

const CustomHomeCard: React.FC<CustomHomeCardProps> = ({
  cardState,
  onPress,
  title,
  cardDescription,
}) => {
  return (
    <TouchableOpacity
      disabled={cardState}
      onPress={onPress}
      className={`p-4 flex-row justify-between rounded-lg mr-4 h-40 w-72 ${
        cardState
          ? "bg-lightGreen border-primaryGreen dark:border-primaryGreen"
          : "bg-lightRed border-red-500 dark:border-red-500"
      } dark:bg-darkModeBgOffsetFour border`}
    >
      <View className="w-[78%]">
        <Text className="text-black dark:text-white font-poppinsSemiBold">
          {title}
        </Text>
        <Text className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-poppinsRegular">
          {cardDescription}
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className={`h-10 w-28 mt-4 justify-center items-center rounded-lg py-2 px-2 ${
            cardState ? "bg-primaryGreen" : "bg-primaryRed"
          }`}
        >
          <Text className="text-white font-poppinsSemiBold">
            {cardState ? "Completed" : "Get Started"}
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-[20%] h-full">
        <View
          className={`w-14 h-14 rounded-full justify-center items-center ${
            cardState ? "bg-lightGreenTwo" : "bg-lightRedTwo"
          }`}
        >
          <StyledComponent
            component={EvilIcons}
            name="lock"
            className={cardState ? "text-primaryGreen" : "text-primaryRed"}
            size={35}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomHomeCard;
