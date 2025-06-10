import { Ionicons } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

interface ReceiveTabIconProps {
  focused: boolean;
}

const ReceiveTabIcon: React.FC<ReceiveTabIconProps> = ({ focused }) => {
  return (
    <View className="items-center">
      <StyledComponent
        component={Ionicons}
        name={focused ? "wallet-outline" : "wallet-outline"}
        className={`${
          focused ? "text-[#0055B3]" : "text-gray-500 dark:text-white"
        } `}
        size={17}
      />

      <Text
        className={`${
          focused
            ? "text-[#0055B3] font-bold"
            : "text-gray-500 font-normal dark:text-white"
        } text-[8px] mt-2`}
      >
        Receive
      </Text>
    </View>
  );
};

export default ReceiveTabIcon;
