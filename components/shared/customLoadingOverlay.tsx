import { View, ActivityIndicator } from "react-native";
import React from "react";
import { StyledComponent } from "nativewind";

type CustomLoadingOverlayProps = {
  size?: number;
  color?: string;
  extraStyle?: string;
};
const CustomLoadingOverlay: React.FC<CustomLoadingOverlayProps> = ({
  size = 35,
  extraStyle,
  color,
}) => {
  return (
    <View className={`items-center justify-center flex-1 ${extraStyle}`}>
      <StyledComponent
        component={ActivityIndicator}
        size={size}
        className="text-customPurpleDark"
      />
    </View>
  );
};

export default CustomLoadingOverlay;
