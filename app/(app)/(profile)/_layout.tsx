import { Stack } from "expo-router";
import React from "react";

const ProfileStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default ProfileStackLayout;
