import { AntDesign } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { View } from "react-native";

interface BookingsTabIconProps {
  focused: boolean;
}

const BookingsTabIcon: React.FC<BookingsTabIconProps> = ({ focused }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View className="items-center">
        <StyledComponent
          component={AntDesign}
          name={"calendar"}
          className={`${
            focused ? "text-[#55b535]" : "text-gray-500 dark:text-white"
          } `}
          size={17}
        />
      </View>
    </View>
  );
};

export default BookingsTabIcon;

