import { Feather } from "@expo/vector-icons";
import { StyledComponent } from "nativewind";
import React from "react";
import { TextInput, View, useColorScheme } from "react-native";

interface CustomSearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  let colorScheme = useColorScheme();

  return (
    <View className="px-6 flex-row items-center h-12 px-3 justify-center items-center rounded-full bg-gray-100 dark:bg-gray-800">
      <StyledComponent
        component={Feather}
        name="search"
        className="text-gray-500 dark:text-white ml-4"
        size={20}
      />
      <TextInput
        placeholder={placeholder}
        className="w-[95%] h-full text-black dark:text-white ml-1"
        placeholderTextColor={colorScheme === "dark" ? "#fff" : "gray"}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomSearchBar;
