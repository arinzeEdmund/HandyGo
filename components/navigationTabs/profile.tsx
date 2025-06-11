import { FontAwesome5 } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { View } from "react-native";

interface ProfileTabIconProps {
  focused: boolean;
}

const ProfileTabIcon: React.FC<ProfileTabIconProps> = ({ focused }) => {
  return (
    <View
      style={{
        alignItems: "center"
      }}
    >
      <StyledComponent
        component={FontAwesome5}
        name={"user-circle"}
        className={`${
          focused ? "text-[#55b535]" : "text-gray-500 dark:text-white"
        } `}
        size={17}
      />
    </View>
  );
};

export default ProfileTabIcon;
