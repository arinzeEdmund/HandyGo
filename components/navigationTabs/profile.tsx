import { FontAwesome5 } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

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
        Profile
      </Text>
    </View>
  );
};

export default ProfileTabIcon;
