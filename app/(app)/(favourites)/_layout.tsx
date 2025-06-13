import { Stack } from "expo-router";
import React from "react";

const FavouritesStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="favourites" />
    </Stack>
  );
};

export default FavouritesStackLayout;
