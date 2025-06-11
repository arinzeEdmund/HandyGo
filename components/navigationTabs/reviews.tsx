import { FontAwesome } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { View } from "react-native";

interface ReviewsTabIconProps {
  focused: boolean;
}

const ReviewsTabIcon: React.FC<ReviewsTabIconProps> = ({ focused }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View className="items-center">
        <StyledComponent
          component={FontAwesome}
          name={"heart-o"}
          className={`${
            focused ? "text-[#55b535]" : "text-gray-500 dark:text-white"
          } `}
          size={17}
        />
      </View>
    </View>
  );
};

export default ReviewsTabIcon;

