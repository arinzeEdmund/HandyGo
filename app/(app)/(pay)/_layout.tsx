import { Stack } from "expo-router";
import React from "react";

const PayStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="pay" />
    </Stack>
  );
};

export default PayStackLayout;
