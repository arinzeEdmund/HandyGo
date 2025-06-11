import { Stack } from "expo-router";
import React from "react";

const ModalScreensStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="category-details" />
      <Stack.Screen name="filter-screen" />
      <Stack.Screen name="booking-form" />
      <Stack.Screen name="select-room" />
      <Stack.Screen name="select-payment-method" />
    </Stack>
  );
};

export default ModalScreensStackLayout;
