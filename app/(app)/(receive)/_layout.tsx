import { Stack } from "expo-router";
import React from "react";

const ReceiveStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="receive" />
    </Stack>
  );
};

export default ReceiveStackLayout;
