import { screenHeight, screenWidth } from "@/utils/useDimensions";
import React, { ReactNode } from "react";
import { ImageBackground, Platform, Text, View } from "react-native";

type OnBoardingListItemProps = {
  image: any;
  title: string;
  subtitle: string;
  controls: ReactNode;
};

const OnboardingListItem: React.FC<OnBoardingListItemProps> = ({
  image,
  title,
  subtitle,
  controls,
}) => {
  return (
    <View
      style={{ width: screenWidth }}
      className="items-center dark:bg-darkModeBgColor justify-center"
    >
      <ImageBackground
        style={{
          width: screenWidth,
          height: screenHeight,
        }}
        resizeMode="cover"
        source={image}
        className="items-center justify-end"
      >
        <View className="w-full h-[35%] mb-10">
          <View
            className={`w-full h-full dark:bg-darkModeBgColor justify-center ${
              Platform.OS === "android" ? "px-4" : ""
            }`}
          >
            <Text
              className={`text-2xl text-black dark:text-white text-center mt-16 font-bold`}
            >
              {title}
            </Text>
            <Text className="text-sm text-center text-gray-500 dark:text-white px-4 mt-4">
              {subtitle}
            </Text>
            {controls}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingListItem;
