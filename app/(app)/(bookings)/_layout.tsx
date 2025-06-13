import { Stack } from "expo-router";
import React from "react";

const BookingsStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="bookings" />
    </Stack>
  );
};

export default BookingsStackLayout;
