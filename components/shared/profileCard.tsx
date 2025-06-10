import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ProfileCardProps = {
  left_icon?: React.ReactNode;
  right_icon?: React.ReactNode;
  extra?: React.ReactNode;
  card_title?: string;
  sub_title?: string;
  height?: string;
  onIconPress?: () => void;
  disabled?: boolean;
  bgColor?: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  left_icon,
  extra,
  card_title,
  right_icon,
  height = "py-1",
  onIconPress,
  sub_title,
  disabled,
  bgColor = "bg-white dark:bg-darkModeBgColor",
}) => {
  return (
    <TouchableOpacity
      onPress={onIconPress}
      disabled={disabled}
      className={`flex-row ${bgColor} px-2 items-center justify-between ${height} `}
    >
      {left_icon}
      <View
        className={`w-[75%] ml-3 ${sub_title ? "pt-2" : "pt-4"} `}
        style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
      >
        <Text className="text-gray-800 dark:text-white font-poppinsRegular">
          {card_title}
        </Text>
        <Text className="text-gray-400 text-xs dark:text-white">
          {sub_title}
        </Text>
      </View>
      {extra}
      {right_icon}
    </TouchableOpacity>
  );
};

export default ProfileCard;
