import { Stack } from "expo-router";
import React from "react";

const SchedulStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="schedules" />
    </Stack>
  );
};

export default SchedulStackLayout;
