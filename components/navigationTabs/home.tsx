import { Foundation } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { View } from "react-native";

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
            focused ? "text-[#55b535]" : "text-gray-500 dark:text-white"
          } `}
          size={17}
        />
      </View>
    </View>
  );
};

export default HomeTabIcon;

