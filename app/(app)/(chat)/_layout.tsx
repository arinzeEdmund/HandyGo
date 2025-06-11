import { Stack } from "expo-router";
import React from "react";

const ChatStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="chat" />
    </Stack>
  );
};

export default ChatStackLayout;
