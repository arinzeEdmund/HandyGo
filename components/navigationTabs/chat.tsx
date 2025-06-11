import { Ionicons } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { View } from "react-native";

interface ChatTabIconProps {
  focused: boolean;
}

const ChatTabIcon: React.FC<ChatTabIconProps> = ({ focused }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View className="items-center">
        <StyledComponent
          component={Ionicons}
          name={"chatbox-ellipses-outline"}
          className={`${
            focused ? "text-[#55b535]" : "text-gray-500 dark:text-white"
          } `}
          size={17}
        />
      </View>
    </View>
  );
};

export default ChatTabIcon;

