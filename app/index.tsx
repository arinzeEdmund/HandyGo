import BottomIndicator from "@/components/onboarding/bottomIndicator";
import OnboardingListItem from "@/components/onboarding/onboardingListItem";
import { OnboardingDataUser } from "@/constants/onboardingData";
import { Onboardingitem } from "@/types/onboardingItem.type";
import { screenHeight, screenWidth } from "@/utils/useDimensions";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Index = () => {
  const topValue =
    Platform.OS === "android"
      ? screenHeight / 1.35 - 100
      : screenHeight / 1.05 - 100;
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef<FlatList>(null);

  const renderItem = ({
    item,
    index,
  }: {
    item: Onboardingitem;
    index: number;
  }) => (
    <OnboardingListItem
      image={item.image}
      title={item.title}
      subtitle={item.subtitle}
      controls={
        <View
          className={`w-full flex-row justify-between items-center ${
            Platform.OS === "android" ? "px-3" : "mt-20 px-6"
          }`}
        >
          {currentIndex < OnboardingDataUser.length - 1 ? (
            <>
              <Text
                className="text-black text-lg text-center ml-4"
                onPress={() => {
                  router.replace("/(auth)/register");
                }}
              >
                Skip
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (slidesRef.current) {
                    slidesRef.current.scrollToIndex({
                      index: currentIndex + 1,
                    });
                  }
                }}
                className="bg-primaryColor rounded-full h-14 w-40 justify-center items-center"
              >
                <Text className="text-white text-lg font-semibold text-center">
                  Next
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                router.replace("/(auth)/register");
              }}
              className="bg-primaryColor rounded-full h-14 w-full justify-center items-center"
            >
              <Text className="text-white text-lg font-semibold text-center">
                Get Started
              </Text>
            </TouchableOpacity>
          )}
        </View>
      }
    />
  );

  return (
    <View className="flex-1 pb-5 bg-white dark:bg-darkModeBgColor">
      <StatusBar translucent barStyle={"dark-content"} />
      <View className="flex-1">
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          data={OnboardingDataUser}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={({ viewableItems }) =>
            setCurrentIndex(viewableItems[0]?.index ?? 0)
          }
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      {currentIndex !== OnboardingDataUser.length ? (
        <View
          style={{
            position: "absolute",
            top: topValue,
            left: screenWidth / 2.4 - 100,
            width: 200,
            height: 200,
          }}
        >
          <View className="flex flex-row justify-between px-12">
            <BottomIndicator
              scrollX={scrollX}
              data={OnboardingDataUser}
              color="bg-primaryColor"
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Index;
