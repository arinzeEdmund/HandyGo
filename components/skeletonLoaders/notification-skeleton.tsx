import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const NotificationsSkeleton = () => {
  const shimmerTranslate = useSharedValue(-100);

  useEffect(() => {
    shimmerTranslate.value = withRepeat(
      withTiming(300, { duration: 1200 }),
      -1,
      true
    );
  }, []);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslate.value }],
  }));

  const renderItem = () => (
    <View className="w-full flex-row gap-3 px-4 mb-5">
      {/* Lock Icon Placeholder */}
      <View className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
        <Animated.View
          style={shimmerStyle}
          className="w-full h-full bg-gray-400 opacity-30"
        />
      </View>

      {/* Text Blocks */}
      <View className="flex-1">
        <View className="h-4 w-[60%] bg-gray-300 rounded-md mb-2 overflow-hidden">
          <Animated.View
            style={shimmerStyle}
            className="w-full h-full bg-gray-400 opacity-30"
          />
        </View>
        <View className="h-3 w-full bg-gray-300 rounded-md mb-1 overflow-hidden">
          <Animated.View
            style={shimmerStyle}
            className="w-full h-full bg-gray-400 opacity-30"
          />
        </View>
        <View className="h-3 w-[80%] bg-gray-300 rounded-md mb-2 overflow-hidden">
          <Animated.View
            style={shimmerStyle}
            className="w-full h-full bg-gray-400 opacity-30"
          />
        </View>
        {/* Timestamp */}
        <View className="h-3 w-[40%] bg-gray-300 rounded-md overflow-hidden">
          <Animated.View
            style={shimmerStyle}
            className="w-full h-full bg-gray-400 opacity-30"
          />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={Array(8).fill(null)}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default NotificationsSkeleton;
