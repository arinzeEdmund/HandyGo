import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CustomButtonProps = {
  title?: string;
  buttonStyle?: string;
  textStyle?: string;
  onPress?: (event?: GestureResponderEvent) => void;
  icon?: React.ReactNode;
  loading?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonStyle = "",
  textStyle = "",
  icon,
  onPress,
  loading,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`items-center justify-center h-14 flex-row ${buttonStyle}`}
      onPress={(e) => onPress?.(e)}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={"#fff"} />
      ) : (
        <View>
          {icon}
          <Text className={` ${textStyle}`}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
