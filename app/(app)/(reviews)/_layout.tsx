import { Stack } from "expo-router";
import React from "react";

const ReviewStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="reviews" />
    </Stack>
  );
};

export default ReviewStackLayout;
