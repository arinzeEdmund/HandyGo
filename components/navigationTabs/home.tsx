import { Foundation } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

interface HomeTabIconProps {
  focused: boolean;
}

const HomeTabIcon: React.FC<HomeTabIconProps> = ({ focused }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View className="items-center">
        <StyledComponent
          component={Foundation}
          name={"home"}
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
          Home
        </Text>
      </View>
    </View>
  );
};

export default HomeTabIcon;
