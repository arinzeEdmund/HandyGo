import { MaterialIcons } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

interface PayTabIconProps {
  focused: boolean;
}

const PayTabIcon: React.FC<PayTabIconProps> = ({ focused }) => {
  return (
    <View className="items-center">
      <StyledComponent
        component={MaterialIcons}
        name={focused ? "add-card" : "add-card"}
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
        Pay
      </Text>
    </View>
  );
};

export default PayTabIcon;
