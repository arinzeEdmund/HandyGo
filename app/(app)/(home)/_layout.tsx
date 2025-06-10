import { Stack } from "expo-router";
import React from "react";

const HomeStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default HomeStackLayout;
