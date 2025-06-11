import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CustomNavbarProps = {
  goBack?: () => void;
  left_icon?: React.ReactNode;
  screen_title?: string;
  nav_icons?: React.ReactNode;
};

const CustomNavbar: React.FC<CustomNavbarProps> = ({
  goBack,
  left_icon,
  screen_title,
  nav_icons,
}) => {

  return (
    <View
      className="flex-row items-center justify-between dark:darkModeBgColor"
    >
      <View className="flex-row items-center justify-center">
        <TouchableOpacity onPress={goBack}>{left_icon}</TouchableOpacity>
      </View>
        <Text className="font-bold text-lg text-primaryColor">{screen_title}</Text>
      <View className="flex-row items-center">{nav_icons}</View>
    </View>
  );
};

export default CustomNavbar;
