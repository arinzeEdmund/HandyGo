import { Feather } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React, { ReactNode } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

type CustomScreenHeadProps = {
  goBack?: () => void;
  side_title?: string;
  center_title?: string;
  back_title?: string;
  icon?: ReactNode;
  desc?: string;
  back?: boolean;
};

const CustomScreenHead: React.FC<CustomScreenHeadProps> = ({
  goBack,
  side_title,
  center_title,
  back,
  back_title,
  icon,
  desc,
}) => {
  return (
    <View className="w-full h-12">
      {back && (
        <TouchableOpacity onPress={goBack} className="flex-row items-center">
          <StyledComponent
            component={Feather}
            name="arrow-left"
            className="text-gray-700 dark:text-white"
            size={24}
          />
          {icon}
          <Text
            className={`text-lg font-poppinsSemiBold text-gray-800 dark:text-white ml-2 ${
              Platform.OS === "android" ? "mt-2" : "mt-2"
            }`}
          >
            {back_title} {"\n"}
            {desc && (
              <Text className="text-xs text-gray-400 dark:text-white ml-2 mt-2">
                {desc}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      )}
      <View className="w-full h-full justify-center items-center">
        <Text className="text-lg font-bold text-gray-700 text-center dark:text-white">
          {center_title}
        </Text>
      </View>
    </View>
  );
};

export default CustomScreenHead;
