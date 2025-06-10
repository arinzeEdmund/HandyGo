import { OnboardingDataArray } from "@/types/onboarding.model";
import { screenWidth } from "@/utils/useDimensions";
import React from "react";
import { Animated } from "react-native";


type BottomIndicatorProps = {
  color: string;
  data: OnboardingDataArray;
  scrollX: any;
};

const BottomIndicator: React.FC<BottomIndicatorProps> = ({
  color,
  data,
  scrollX,
}) => {
  return data.map((_, i) => {
    const inputRange = [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth];
    const dotWidth = scrollX.interpolate({
      inputRange,
      outputRange: [40, 40, 40],
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.2, 1.8, 0.2],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        key={i}
        className={`h-2 mx-2 rounded-full ${color}`}
        style={{ width: dotWidth, opacity, height: 10 }}
      />
    );
  });
};

export default BottomIndicator;
